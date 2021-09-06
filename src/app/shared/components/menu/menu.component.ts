import { Component, OnInit } from "@angular/core";
import { UIService } from "~/app/shared/services/ui.service";
import { Icons } from "~/app/shared/utils";

@Component({
  selector: "ns-menu",
  moduleId: module.id,
  styleUrls: ["./menu.component.scss"],
  template: `
    <StackLayout class="{{ ui.classResponsive }}" width="100%" height="100%">
      <StackLayout width="100%" height="100%" orientation="horizontal">
        <StackLayout width="80%" height="100%" backgroundColor="#FFFFFF">
          <StackLayout
            width="100%"
            height="0"
            backgroundColor="#333333"
          ></StackLayout>
          <Label
            [text]="icons.close"
            color="#000000"
            (tap)="closeMenu()"
            class="ionicons close"
            padding="15"
          ></Label>

          <Label
            color="#000000"
            margin="15 20 0 25"
            text="Milicic,"
            fontSize="25"
            class="bold text-color-gray"
          ></Label>
          <Label
            color="#000000"
            margin="-5 20 20 25"
            text="Lennon"
            fontSize="40"
            class="bold text-color-gray"
          ></Label>

          <ng-container *ngFor="let option of menuOptions">
            <GridLayout
              columns="40, 10, *"
              rows="auto"
              padding="10 15 10 25"
              (tap)="option.onTap && option.onTap()"
            >
              <Label
                color="#000000"
                col="0"
                fontSize="25"
                [text]="option.icon"
                class="ionicons text-color-gray"
              ></Label>
              <Label
                color="#000000"
                col="2"
                fontSize="20"
                [text]="option.displayName"
                class="text-color-gray"
              ></Label>
            </GridLayout>
          </ng-container>
        </StackLayout>
        <StackLayout width="20%" height="100%" (tap)="closeMenu()">
          <StackLayout
            width="100%"
            height="0"
            backgroundColor="#333333"
          ></StackLayout>
        </StackLayout>
      </StackLayout>
    </StackLayout>
  `
})
export class MenuComponent implements OnInit {
  icons = Icons;

  menuOptions = [
    {
      displayName: "Home",
      icon: this.icons.home,
      onTap: () => {
        this.closeMenu();
      }
    },
    {
      displayName: "Account",
      icon: this.icons.account,
      onTap: () => {
        this.closeMenu();
      }
    },
    {
      displayName: "Downloads",
      icon: this.icons.downloads,
      onTap: () => {
        this.closeMenu();
      }
    },
    {
      displayName: "Settings",
      icon: this.icons.settings,
      onTap: () => {
        this.closeMenu();
      }
    },
    {
      displayName: "Help",
      icon: this.icons.help,
      onTap: () => {
        this.closeMenu();
      }
    }
  ];

  constructor(public ui: UIService) {}

  ngOnInit(): void {}

  closeMenu(): void {
    this.ui.closeMenu();
  }
}
