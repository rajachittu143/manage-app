import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { TreeData } from '../tree-data.model';

@Component({
  selector: 'app-delete-node',
  templateUrl: './delete-node.component.html',
  styleUrls: ['./delete-node.component.scss']
})
export class DeleteNodeComponent {

  constructor() { }

  @Output() deletedNode = new EventEmitter;
  @Input() currentNode !: TreeData;

  deleteNode() {
    this.deletedNode.emit(this.currentNode);
  }

}
