import { Component, OnInit } from "@angular/core";
import { InstagramService } from "~/app/shared/services/instagram.service";
import { Instagram } from "~/app/shared/interfaces/instagram";
import { Icons } from "~/app/shared/utils";
import { ObservableArray, Page } from "@nativescript/core";

@Component({
  selector: "ns-instagram",
  moduleId: module.id,
  animations: [],
  styleUrls: ["./instagram.component.scss"],
  template: `
    <StackLayout iosOverflowSafeArea="true" backgroundColor="#000000">
      <!-- HEADER -->
      <GridLayout padding="5" rows="auto" columns="auto,*,auto,auto,auto">
        <Image
          width="100"
          height="30"
          row="0"
          column="0"
          src="~/assets/images/logo-instagram.png"
        ></Image>
        <Label
          color="#FFFFFF"
          paddingRight="20"
          row="0"
          column="2"
          fontSize="28"
          class="ico-mat"
          [text]="icons.plus"
        ></Label>
        <Label
          color="#FFFFFF"
          paddingRight="20"
          row="0"
          column="3"
          fontSize="28"
          class="ico-mat"
          [text]="icons.hearth"
        ></Label>
        <Label
          color="#FFFFFF"
          row="0"
          column="4"
          fontSize="28"
          class="ico-mat"
          [text]="icons.send"
        ></Label>
      </GridLayout>
      <!-- <ng-container *ngIf="loadingItems">
        <Label
          textAlignment="center"
          color="#FFFFFF"
          fontSize="40"
          text="CARREGANDO..."
        ></Label>
      </ng-container> -->
      <PullToRefresh (refresh)="refreshList($event)">
        <ListView
          separatorColor="transparent"
          padding="0"
          isUserInteractionEnabled="true"
          iosEstimatedRowHeight="200"
          [items]="items"
        >
          <ng-template let-item="item" let-i="index">
            <StackLayout padding="0 0 10 0">
              <GridLayout padding="5" rows="auto,auto" columns="auto,*,auto">
                <Image
                  borderRadius="100%"
                  width="40"
                  height="30"
                  marginRight="5"
                  row="0"
                  rowSpan="2"
                  column="0"
                  [src]="item.profile"
                ></Image>
                <Label
                  color="#FFFFFF"
                  row="0"
                  column="1"
                  fontSize="12"
                  fontWeight="bold"
                  [text]="item.name"
                ></Label>
                <Label
                  color="#FFFFFF"
                  row="1"
                  column="1"
                  fontSize="11"
                  fontWeight="normal"
                  [text]="item.musica"
                ></Label>
                <Label
                  color="#FFFFFF"
                  row="0"
                  rowSpan="2"
                  column="2"
                  fontSize="16"
                  class="ico-mat"
                  [text]="icons.info"
                ></Label>
              </GridLayout>

              <Carousel
                height="280"
                width="100%"
                padding="0"
                indicatorColor="#FFFFFF"
                finite="true"
                bounce="true"
                showIndicator="true"
                indicatorOffset="100,100"
                verticalAlignment="top"
                android:indicatorAnimation="swap"
                [items]="item.photos"
              >
                <CarouselItem
                  *ngFor="let photo of item.photos"
                  backgroundColor="#000000"
                  verticalAlignment="middle"
                  padding="0"
                >
                  <Image
                    [src]="photo.image"
                    stretch="aspectFill"
                    backgroundColor="#000000"
                    horizontalAlignment="center"
                  ></Image>
                </CarouselItem>
              </Carousel>

              <GridLayout
                padding="5"
                rows="auto"
                columns="auto,auto,auto,*,auto"
              >
                <Label
                  color="#FFFFFF"
                  paddingRight="20"
                  row="0"
                  column="0"
                  fontSize="28"
                  class="ico-mat"
                  [text]="icons.hearth"
                ></Label>
                <Label
                  color="#FFFFFF"
                  paddingRight="20"
                  row="0"
                  column="1"
                  fontSize="28"
                  class="ico-mat"
                  [text]="icons.ballon"
                ></Label>
                <Label
                  color="#FFFFFF"
                  row="0"
                  column="2"
                  fontSize="28"
                  class="ico-mat"
                  [text]="icons.send"
                ></Label>
                <Label
                  color="#FFFFFF"
                  row="0"
                  column="4"
                  fontSize="28"
                  class="ico-mat"
                  [text]="icons.save"
                ></Label>
              </GridLayout>
              <Label padding="0 5">
                <FormattedString>
                  <Span color="#FFFFFF" text="Liked by "></Span>
                  <Span
                    color="#FFFFFF"
                    [text]="item.likedBy"
                    fontWeight="bold"
                  ></Span>
                  <Span color="#FFFFFF" text=" and "></Span>
                  <Span color="#FFFFFF" text="others" fontWeight="bold"></Span>
                </FormattedString>
              </Label>
              <Label padding="5 5 0 5">
                <FormattedString>
                  <Span
                    color="#FFFFFF"
                    [text]="item.name + ' '"
                    fontWeight="bold"
                  ></Span>
                  <Span color="#FFFFFF" [text]="item.description"></Span>
                </FormattedString>
              </Label>
              <Label padding="5 5 0 5">
                <FormattedString>
                  <Span color="#999999" text="View all "></Span>
                  <Span color="#999999" [text]="item.countComments"></Span>
                  <Span color="#999999" text=" comments"></Span>
                </FormattedString>
              </Label>
            </StackLayout>
          </ng-template>
        </ListView>
      </PullToRefresh>
    </StackLayout>
  `
})
export class InstagramComponent implements OnInit {
  public icons = Icons;
  public items: ObservableArray<Instagram> = new ObservableArray<Instagram>([]);
  public loadingItems: boolean = true;

  constructor(private page: Page, private instagramService: InstagramService) {}

  ngOnInit(): void {
    if (global.isIOS) {
      this.page.actionBarHidden = true;
    }
    this.getItems();
  }

  getItems(clear: boolean = true, pullRefresh = undefined): void {
    this.loadingItems = clear;
    this.instagramService
      .getItems()
      .then(items => {
        this.items = items;
      })
      .catch(() => {
        this.items = new ObservableArray([]);
      })
      .finally(() => {
        this.loadingItems = false;
        if (pullRefresh) {
          pullRefresh.refreshing = false;
        }
      });
  }

  refreshList(args) {
    const pullRefresh = args.object;
    this.getItems(true, pullRefresh);
  }
}
