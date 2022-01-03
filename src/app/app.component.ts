import { Component, ViewChild } from '@angular/core';
import {
  IgxTreeGridComponent,
  IRowSelectionEventArgs,
  RowType,
} from 'igniteui-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild(IgxTreeGridComponent) private _treeGrid: IgxTreeGridComponent;

  localData: any[] = [
    { id: 1, pid: null, name: 'Row 01' },
    { id: 2, pid: null, name: 'Row 02' },
    { id: 3, pid: null, name: 'Row 03' },
  ];

  setSelectedRow(rowSelected: IRowSelectionEventArgs): void {
    if (rowSelected.newSelection?.length) {
      const rowID: string = rowSelected.newSelection[0];
      console.log({ ROWID: rowID });

      const row: RowType = this._treeGrid.getRowByKey(rowID);
      console.log({ ROW: row });

      const nativeElement: HTMLElement = row?.nativeElement;
      console.error({ NATIVE_ELEMENT: nativeElement });
    }
  }
}
