import { Component } from "@angular/core";
import { UIService } from "~/app/shared/services/ui.service";

@Component({
  selector: "ns-custom-modal",
  moduleId: module.id,
  styleUrls: ["./custom-modal.component.scss"],
  template: `
    <GridLayout
      verticalAlignment="center"
      horizontalAlignment="center"
      rows="auto, auto, auto"
      columns="*"
      backgroundColor="#FFFFFF"
      padding="20 10"
      borderRadius="20"
      width="90%"
    >
      <Label
        row="0"
        col="0"
        fontSize="20"
        fontWeight="bold"
        textAlignment="center"
        text="I'm a modal"
        color="#000000"
      ></Label>
      <Label
        row="1"
        col="0"
        marginTop="10"
        fontSize="17"
        textAlignment="center"
        text="Pretty cool right?"
        color="#000000"
      ></Label>
      <StackLayout
        row="3"
        col="0"
        margin="5 20"
        (tap)="ui.closeCustomModal()"
        class="button"
        backgroundColor="#c0defa"
        color="#000000"
      >
        <Label textAlignment="center" text="Close"></Label>
      </StackLayout>
    </GridLayout>
  `
})
export class CustomModalComponent {
  constructor(public ui: UIService) {}
}
