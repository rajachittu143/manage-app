import { TreeData } from './tree-data.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TreeBusinessService {

  _dataChange = new BehaviorSubject<TreeData[]>(
    [{
      Id: 1,
      Name: 'All Businesses',
      Description: 'Father 1',
      Children: [
        {
          Id: 2,
          Name: 'Services',
          Description: 'Children 1',
          Children: []
        },
        {
          Id: 3,
          Name: 'Manufacturing',
          Description: 'Children 2',
          Children: [
            {
              Id: 4,
              Name: 'Printing & Packaging',
              Description: 'GrandChildren 1',
              Children: []
            },
            {
              Id: 5,
              Name: 'Corrugated Packaging',
              Description: 'GrandChildren 1',
              Children: []
            },
            {
              Id: 6,
              Name: 'Offset Printing',
              Description: 'GrandChildren 1',
              Children: []
            },
            {
              Id: 7,
              Name: 'Paper & Paper Board ',
              Description: 'GrandChildren 1',
              Children: [ {
                Id: 8,
                Name: 'Kraft Paper',
                Description: 'GrandChildren 1',
                Children: []
              },
              {
                Id: 9,
                Name: 'Duplex Board',
                Description: 'GrandChildren 1',
                Children: []
              }, {
                Id: 10,
                Name: 'Folding Box Board & Cup Stock',
                Description: 'GrandChildren 1',
                Children: []
              }]
            }
          ]
        }
      ]
    },
  ]
  );


}
