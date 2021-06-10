import { Component, Inject, OnInit,Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RegistrationService } from 'src/app/core/http/registration/registration.service';
import { AppLoaderService } from 'src/app/shared/services/app-loader/app-loader.service';

import {SelectionModel} from '@angular/cdk/collections';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {BehaviorSubject} from 'rxjs';

/**
 * Node for to-do item
 */
 export class TodoItemNode {
  children!: TodoItemNode[];
  item!: string;
}

/** Flat to-do item node with expandable and level information */
export class TodoItemFlatNode {
  item!: string;
  level!: number;
  expandable!: boolean;
}

/**
 * The Json object for to-do list data.
 */
const TREE_DATA = {
  'Employee': {
    'Unit 1': null,
    'Unit 2': null,
    HR: {
      Accounts: null,
      Billing: null,
    }
  },
  'Customer': {
    'Customer 1':null,
    'Customer 2':null,
    'Customer 3':null
  }
};

/**
 * Checklist database, it can build a tree structured Json object.
 * Each node in Json object represents a to-do item or a category.
 * If a node is a category, it has children items and new items can be added under the category.
 */
@Injectable()
export class ChecklistDatabase {
  dataChange = new BehaviorSubject<TodoItemNode[]>([]);

  get data(): TodoItemNode[] { return this.dataChange.value; }

  constructor() {
    this.initialize();
  }

  initialize() {
    // Build the tree nodes from Json object. The result is a list of `TodoItemNode` with nested
    //     file node as children.
    const data = this.buildFileTree(TREE_DATA, 0);

    // Notify the change.
    this.dataChange.next(data);
  }

  /**
   * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
   * The return value is the list of `TodoItemNode`.
   */
  buildFileTree(obj: any, level: number): TodoItemNode[] {
    return Object.keys(obj).reduce<TodoItemNode[]>((accumulator, key) => {
      const value = obj[key];
      const node = new TodoItemNode();
      node.item = key;

      if (value != null) {
        
        if (typeof value === 'object') {
          node.children = this.buildFileTree(value, level + 1);
        } else {
          node.item = value;
        }
      }

      return accumulator.concat(node);
    }, []);
  }

  /** Add an item to to-do list */
  insertItem(parent: TodoItemNode, name: string) {
    if (parent.children) {
      parent.children.push({item: name} as TodoItemNode);
      this.dataChange.next(this.data);
    }
  }

  updateItem(node: TodoItemNode, name: string) {
    node.item = name;
    this.dataChange.next(this.data);
  }
}

@Component({
  selector: 'app-registergetster',
  templateUrl: './registergetster.component.html',
  styleUrls: ['./registergetster.component.css'],
  providers: [ChecklistDatabase]
})
export class RegistergetsterComponent implements OnInit {



  errorMsg = '';
  hide: any;
  registerGetsterForm!: FormGroup;

  constructor(private database: ChecklistDatabase,
    private registrationService: RegistrationService,
    private loader: AppLoaderService,
    private snackBar: MatSnackBar,) {
    this.treeFlattener = new MatTreeFlattener(this.transformer, this.getLevel,
      this.isExpandable, this.getChildren);
    this.treeControl = new FlatTreeControl<TodoItemFlatNode>(this.getLevel, this.isExpandable);
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

    database.dataChange.subscribe(data => {
      this.dataSource.data = data;
    });
  }

  ngOnInit(): void {
    this.registerGetsterForm = new FormGroup({
      username: new FormControl('', Validators.required),
    });
  }

  bodyData: any;
  registerGetster() {
    // if (!this.signupForm.invalid) {
    this.loader.open();
    // do what you wnat with your data

    this.bodyData = {
      'firstName': this.registerGetsterForm.value.fname,
      'lastName': this.registerGetsterForm.value.lname,
      "getster_id": 8102,
      "getster_status": 1,
      "first_name": "t",
      "last_name": "slast_name",
      "additional_user_data_field_name": "{\"key1\": \"value66\", \"key2\": \"value2\"}",
      "about_user": "sabout_user",
      "biz_card_details": "{\"key1\": \"value66\", \"key2\": \"value2\"}",
      "biz_card_mobile_no": 123,
      "biz_card_phone_no": 456,
      "biz_card_website": "sbiz_card_website",
      "biz_card_email_id": "sbiz_card_email_id",
      "biz_card_address1": "sbiz_card_address1",
      "biz_card_address_gps": "biz_card_address_gps",
      "biz_card_address2": "sbiz_card_address2",
      "biz_card_designation1": "sbiz_card_designation1",
      "biz_card_designation2": "sbiz_card_designation2",
      "biz_card_designation3": "sbiz_card_designation3",
      "biz_card_designation4": "sbiz_card_designation4",
      "getster_registered_category": "{\"key1\": \"value66\", \"key2\": \"value2\"}",
      "face_recognition_image_path": "{\"key1\": \"value66\", \"key2\": \"value2\"}",
      "user_profile_update": "{\"key1\": \"value66\", \"key2\": \"value2\"}"
    }

    this.registrationService.insertMaster(this.bodyData).subscribe(res => {
      this.snackBar.open('Success! A verification email will be sent!', 'OK', { duration: 4000 });
      // this.dialogRef.close("signup");
      this.loader.close();
      this.registerGetsterForm.reset();
    }, err => {
      this.loader.close();
      this.snackBar.open(err.error.message, 'OK', { duration: 4000 });
      this.registerGetsterForm.reset();
    });

  }

  // raja

   /** Map from flat node to nested node. This helps us finding the nested node to be modified */
   flatNodeMap = new Map<TodoItemFlatNode, TodoItemNode>();

   /** Map from nested node to flattened node. This helps us to keep the same object for selection */
   nestedNodeMap = new Map<TodoItemNode, TodoItemFlatNode>();
 
   /** A selected parent node to be inserted */
   selectedParent: TodoItemFlatNode | null = null;
 
   /** The new item's name */
   newItemName = '';
 
   treeControl: FlatTreeControl<TodoItemFlatNode>;
 
   treeFlattener: MatTreeFlattener<TodoItemNode, TodoItemFlatNode>;
 
   dataSource: MatTreeFlatDataSource<TodoItemNode, TodoItemFlatNode>;
 
   /** The selection for checklist */
   checklistSelection = new SelectionModel<TodoItemFlatNode>(true /* multiple */);

 
   getLevel = (node: TodoItemFlatNode) => node.level;
 
   isExpandable = (node: TodoItemFlatNode) => node.expandable;
 
   getChildren = (node: TodoItemNode): TodoItemNode[] => node.children;
 
   hasChild = (_: number, _nodeData: TodoItemFlatNode) => _nodeData.expandable;
 
   hasNoContent = (_: number, _nodeData: TodoItemFlatNode) => _nodeData.item === '';
 
   /**
    * Transformer to convert nested node to flat node. Record the nodes in maps for later use.
    */
   transformer = (node: TodoItemNode, level: number) => {
     const existingNode = this.nestedNodeMap.get(node);
     const flatNode = existingNode && existingNode.item === node.item
         ? existingNode
         : new TodoItemFlatNode();
     flatNode.item = node.item;
     flatNode.level = level;
     flatNode.expandable = !!node.children;
     this.flatNodeMap.set(flatNode, node);
     this.nestedNodeMap.set(node, flatNode);
     return flatNode;
   }
 
   /** Whether all the descendants of the node are selected */
   descendantsAllSelected(node: TodoItemFlatNode): boolean {
     const descendants = this.treeControl.getDescendants(node);
     return descendants.every(child => this.checklistSelection.isSelected(child));
   }
 
   /** Whether part of the descendants are selected */
   descendantsPartiallySelected(node: TodoItemFlatNode): boolean {
     const descendants = this.treeControl.getDescendants(node);
     const result = descendants.some(child => this.checklistSelection.isSelected(child));
     return result && !this.descendantsAllSelected(node);
   }
 
   /** Toggle the to-do item selection. Select/deselect all the descendants node */
   todoItemSelectionToggle(node: TodoItemFlatNode): void {
     this.checklistSelection.toggle(node);
     const descendants = this.treeControl.getDescendants(node);
     this.checklistSelection.isSelected(node)
       ? this.checklistSelection.select(...descendants)
       : this.checklistSelection.deselect(...descendants);
   }
 
   /** Select the category so we can insert the new item. */
   addNewItem(node: TodoItemFlatNode) {
     const parentNode = this.flatNodeMap.get(node);
     this.database.insertItem(parentNode!, '');
     this.treeControl.expand(node);
   }
 
   /** Save the node to database */
   saveNode(node: TodoItemFlatNode, itemValue: string) {
     const nestedNode = this.flatNodeMap.get(node);
     this.database.updateItem(nestedNode!, itemValue);
   }

}
