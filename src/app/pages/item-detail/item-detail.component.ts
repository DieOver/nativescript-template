import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Item } from "~/app/shared/interfaces/item";
import { ItemService } from "~/app/shared/services/item.service";
import { Page } from "@nativescript/core/ui";
import { RouterExtensions } from "@nativescript/angular";
import { Icons } from "~/app/shared/utils";
import { UIService } from "~/app/shared/services/ui.service";

@Component({
  selector: "ns-details",
  moduleId: module.id,
  styleUrls: ["./item-detail.component.scss"],
  template: `
    <Page>
      <StackLayout
        iosOverflowSafeArea="false"
        class="image-bg {{ ui.classResponsive }}"
        backgroundImage="url('{{ item.img }}')"
      >
        <!-- HEADER -->
        <FlexboxLayout padding="20 20 20 20" justifyContent="space-between">
          <Label
            color="#FFFFFF"
            alignSelf="flex-start"
            [text]="icons.chevron_left"
            class="ico-mat back"
            (tap)="goBack()"
            padding="0 10 10 0"
          ></Label>
          <Label
            color="#FFFFFF"
            alignSelf="flex-end"
            [text]="icons.app"
            class="ico-mat app"
            padding="0 0 10 10"
          ></Label>
        </FlexboxLayout>
        <GridLayout rows="50, *, auto" columns="*" padding="20">
          <StackLayout row="1" column="0">
            <Label
              class="ico-mat"
              color="#FFFFFF"
              fontSize="24"
              marginBottom="10"
              [text]="icons.ballon"
            ></Label>
            <Label
              [text]="icons.hearth"
              class="ico-mat"
              color="#FFFFFF"
              fontSize="24"
              marginBottom="10"
            ></Label>
            <Label
              [text]="icons.clock"
              class="ico-mat"
              color="#FFFFFF"
              fontSize="24"
            ></Label>
          </StackLayout>
          <StackLayout
            backgroundColor="#80808066"
            borderRadius="20"
            row="2"
            column="0"
            padding="20"
          >
            <Label
              color="#FFFFFF"
              fontSize="24"
              fontWeight="bold"
              [text]="item.name"
            ></Label>
            <Label
              color="#FFFFFF"
              fontSize="14"
              textWrap="true"
              text="gajshgrasjrghasgrjhasg hjrgasjhrg sajgjhsafj fsarjhasfjhrfajshrf jahsf rasr"
            ></Label>
          </StackLayout>
        </GridLayout>
      </StackLayout>
    </Page>
  `
})
export class ItemDetailComponent implements OnInit {
  public icons = Icons;
  public item: Item = {} as Item;

  constructor(
    private itemService: ItemService,
    private route: ActivatedRoute,
    private page: Page,
    private routerExt: RouterExtensions,
    public ui: UIService
  ) {
    this.page.actionBarHidden = true;
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.params.id;
    this.item = this.itemService.getItem(id);
  }

  goBack(): void {
    this.routerExt.back();
  }
}
