import { TreeData } from './tree-data.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TreeDataService {

  _dataChange = new BehaviorSubject<TreeData[]>(
    [{
      Id: 1,
      Name: 'Director',
      Description: 'Father 1',
      Children: [
        {
          Id: 4,
          Name: 'Director 1',
          Description: 'Children 1',
          Children: []
        },
        {
          Id: 5,
          Name: 'Director 2',
          Description: 'Children 2',
          Children: [
            {
              Id: 6,
              Name: 'Director 3',
              Description: 'GrandChildren 1',
              Children: []
            }
          ]
        }
      ]
    },
    {
      Id: 2,
      Name: 'Employee',
      Description: 'Father 2',
      Children: [
        {
          Id: 7,
          Name: 'HR',
          Description: 'HR 1',
          Children: []
        },
        {
          Id: 8,
          Name: 'DevOps Engineer',
          Description: 'Children 1',
          Children: []
        }
      ]
    },
    {
      Id: 3,
      Name: 'Developer - Outsourcing',
      Description: 'Father 2',
      Children: [
        {
          Id: 9,
          Name: 'Developer 1',
          Description: 'Children 1',
          Children: []
        }
      ]
    }
  ]
  );


}
