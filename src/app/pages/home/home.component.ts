import { Component, OnDestroy, OnInit } from "@angular/core";
import { RouterExtensions } from "@nativescript/angular";
import { Page } from "@nativescript/core";
import { Item } from "~/app/shared/interfaces/item";
import { ItemService } from "~/app/shared/services/item.service";
import { UIService } from "~/app/shared/services/ui.service";
import { Icons } from "~/app/shared/utils";

@Component({
  selector: "ns-home",
  moduleId: module.id,
  animations: [],
  styleUrls: ["./home.component.scss"],
  template: `
    <StackLayout
      iosOverflowSafeArea="false"
      class="{{ ui.classResponsive }}"
      backgroundColor="#FFFFFF"
    >
      <!-- HEADER -->
      <FlexboxLayout padding="20" justifyContent="space-between">
        <Label
          color="#000000"
          (tap)="ui.openMenu()"
          alignSelf="flex-start"
          [text]="icons.menu_m"
          class="ico-mat menu"
        ></Label>
        <Label
          color="#000000"
          alignSelf="flex-end"
          [text]="icons.search_m"
          class="ico-mat search"
        ></Label>
      </FlexboxLayout>

      <!-- TITLE -->
      <StackLayout padding="20 20">
        <Label
          color="#000000"
          text="Fashion Week"
          color="#b075f0"
          fontSize="32"
          fontWeight="bold"
        ></Label>
        <Label
          color="#000000"
          text="2021 Fashion show in Paris"
          fontSize="12"
          fontWeight="normal"
        ></Label>
      </StackLayout>

      <!-- FILTER -->
      <FlexboxLayout padding="0 20 10 20" justifyContent="space-between">
        <Label
          color="#000000"
          alignSelf="flex-start"
          fontSize="32"
          fontWeight="bold"
          text="Explore"
        ></Label>
        <Label
          (tap)="ui.showCustomModal()"
          color="#000000"
          alignSelf="flex-end"
          fontSize="32"
          [text]="icons.filter_m"
          class="ico-mat"
        ></Label>
      </FlexboxLayout>

      <!-- TAB -->
      <FlexboxLayout
        class="tab"
        padding="0 20 20 20"
        justifyContent="space-between"
      >
        <Label
          color="#b075f0"
          alignSelf="flex-start"
          text="Recommended"
        ></Label>
        <Label color="#000000" alignSelf="center" text="New Models"></Label>
        <Label color="#000000" alignSelf="flex-end" text="2020 Show"></Label>
      </FlexboxLayout>

      <!-- CONTENT -->
      <ScrollView orientation="vertical" scrollBarIndicatorVisible="false">
        <StackLayout>
          <!-- SCROLL SIDE -->
          <ScrollView
            scrollBarIndicatorVisible="false"
            orientation="horizontal"
          >
            <StackLayout orientation="horizontal">
              <ng-container *ngFor="let item of items">
                <!-- CARD -->
                <FlexboxLayout
                  alignItems="flex-start"
                  flexDirection="column"
                  margin="0 10"
                  (tap)="goToDetail(item)"
                >
                  <Image
                    class="image-card"
                    backgroundImage="url('{{ item.img }}')"
                  >
                  </Image>
                  <Label
                    color="#000000"
                    paddingTop="10"
                    [text]="item.name | truncate: 12"
                    fontSize="14"
                    fontWeight="bold"
                  ></Label>
                  <Label
                    color="#000000"
                    [text]="item.location | truncate: 12"
                    fontSize="14"
                  ></Label>
                </FlexboxLayout>
              </ng-container>
            </StackLayout>
          </ScrollView>

          <!-- CARD BOTTOM -->
          <StackLayout padding="10">
            <Image
              class="image-card-bottom"
              backgroundImage="url('https://static.wixstatic.com/media/0eb2c5_7101dd098ee24a549974d29ea286570e~mv2_d_1200_1554_s_2.png/v1/fill/w_1000,h_1295,al_c,usm_0.66_1.00_0.01/0eb2c5_7101dd098ee24a549974d29ea286570e~mv2_d_1200_1554_s_2.png')"
            ></Image>
          </StackLayout>
        </StackLayout>
      </ScrollView>
    </StackLayout>
  `
})
export class HomeComponent implements OnInit, OnDestroy {
  icons = Icons;
  items: Item[] = [];

  constructor(
    private itemService: ItemService,
    private page: Page,
    private routerExt: RouterExtensions,
    public ui: UIService
  ) {
    this.page.actionBarHidden = true;
  }

  ngOnInit(): void {
    this.items = this.itemService.getItems();
  }

  ngOnDestroy(): void {}

  goToDetail(item: any): void {
    this.routerExt.navigate(["/detail/", item.id]);
  }
}
