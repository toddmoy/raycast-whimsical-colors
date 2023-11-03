import { ActionPanel, Action, List } from "@raycast/api";

const COLORS = [
  {
    name: "Gray 1",
    hex: "#0F171F",
  },
  {
    name: "Gray 1.5",
    hex: "#222E3A",
  },
  {
    name: "Gray 2",
    hex: "#293845",
  },
  {
    name: "Gray 2.5",
    hex: "#384957",
  },
  {
    name: "Gray 3",
    hex: "#4B5C6B",
  },
  {
    name: "Gray 4",
    hex: "#788896",
  },
  {
    name: "Gray 5",
    hex: "#9EADBA",
  },
  {
    name: "Gray 6",
    hex: "#C3CFD9",
  },
  {
    name: "Gray 7",
    hex: "#DFE6ED",
  },
  {
    name: "Gray 8",
    hex: "#EDF1F5",
  },
  {
    name: "Gray 9",
    hex: "#F7F9FA",
  },
  {
    name: "Gray 10",
    hex: "#FFFFFF",
  },
  {
    name: "Purple 0.5",
    hex: "#710FBF",
  },
  {
    name: "Purple 1",
    hex: "#8313DD",
  },
  {
    name: "Purple 2",
    hex: "#8F2BE0",
  },
  {
    name: "Purple 3",
    hex: "#9C42E4",
  },
  {
    name: "Purple 4",
    hex: "#A85AE7",
  },
  {
    name: "Purple 5",
    hex: "#B571EB",
  },
  {
    name: "Purple 6",
    hex: "#C189EE",
  },
  {
    name: "Purple 7",
    hex: "#CDA1F1",
  },
  {
    name: "Purple 8",
    hex: "#F0E4FA",
  },
  {
    name: "Purple 9",
    hex: "#F7F1FC",
  },
  {
    name: "Blue 0",
    hex: "#1D76C4",
  },
  {
    name: "Blue 0.5",
    hex: "#207DCE",
  },
  {
    name: "Blue 1",
    hex: "#2C88D9",
  },
  {
    name: "Blue 2",
    hex: "#4194DD",
  },
  {
    name: "Blue 3",
    hex: "#56A0E1",
  },
  {
    name: "Blue 4",
    hex: "#6BACE4",
  },
  {
    name: "Blue 5",
    hex: "#80b8e8",
  },
  {
    name: "Blue 6",
    hex: "#95C4EC",
  },
  {
    name: "Blue 7",
    hex: "#ABCFF0",
  },
  {
    name: "Blue 8",
    hex: "#E1EEFA",
  },
  {
    name: "Blue 9",
    hex: "#EAF3FB",
  },
  {
    name: "Green 0.5",
    hex: "#17A496",
  },
  {
    name: "Green 1",
    hex: "#1AAE9F",
  },
  {
    name: "Green 2",
    hex: "#31B6A9",
  },
  {
    name: "Green 3",
    hex: "#48BEB2",
  },
  {
    name: "Green 4",
    hex: "#5FC6BC",
  },
  {
    name: "Green 5",
    hex: "#76CEC5",
  },
  {
    name: "Green 6",
    hex: "#8CD7CF",
  },
  {
    name: "Green 7",
    hex: "#A3DFD9",
  },
  {
    name: "Green 8",
    hex: "#D5F1EE",
  },
  {
    name: "Green 9",
    hex: "#EEF9F8",
  },
  {
    name: "Pink 1",
    hex: "#BD34D1",
  },
  {
    name: "Pink 2",
    hex: "#C448D6",
  },
  {
    name: "Pink 3",
    hex: "#CA5DDA",
  },
  {
    name: "Pink 4",
    hex: "#D171DF",
  },
  {
    name: "Pink 5",
    hex: "#D785E3",
  },
  {
    name: "Pink 6",
    hex: "#DE99E8",
  },
  {
    name: "Pink 7",
    hex: "#E5AEED",
  },
  {
    name: "Orange 1",
    hex: "#EFA544",
  },
  {
    name: "Orange 2",
    hex: "#F1AE57",
  },
  {
    name: "Orange 3",
    hex: "#F2B769",
  },
  {
    name: "Orange 4",
    hex: "#F4C07C",
  },
  {
    name: "Orange 5",
    hex: "#F5C98F",
  },
  {
    name: "Orange 6",
    hex: "#F7D2A2",
  },
  {
    name: "Orange 7",
    hex: "#F9DBB4",
  },
  {
    name: "Orange 9",
    hex: "#FFF6EA",
  },
  {
    name: "Red 1",
    hex: "#D3455B",
  },
  {
    name: "Red 2",
    hex: "#D7586B",
  },
  {
    name: "Red 3",
    hex: "#DC6A7C",
  },
  {
    name: "Red 4",
    hex: "#E07D8C",
  },
  {
    name: "Red 5",
    hex: "#E58F9D",
  },
  {
    name: "Red 6",
    hex: "#E9A2AD",
  },
  {
    name: "Red 7",
    hex: "#EDB5BD",
  },
  {
    name: "Red 8",
    hex: "#FCDBE0",
  },
  {
    name: "Red 9",
    hex: "#FFEFF1",
  },
  {
    name: "Navy 1",
    hex: "#303395",
  },
  {
    name: "Navy 2",
    hex: "#4547A0",
  },
  {
    name: "Navy 3",
    hex: "#595CAA",
  },
  {
    name: "Navy 4",
    hex: "#6E70B5",
  },
  {
    name: "Navy 5",
    hex: "#8385BF",
  },
  {
    name: "Navy 6",
    hex: "#9799CA",
  },
  {
    name: "Navy 7",
    hex: "#ACADD5",
  },
  {
    name: "Whimsy Blue 0.5",
    hex: "#4739E8",
  },
  {
    name: "Whimsy Blue 1",
    hex: "#6558F5",
  },
  {
    name: "Whimsy Blue 2",
    hex: "#7569F4",
  },
  {
    name: "Whimsy Blue 3",
    hex: "#8378F5",
  },
  {
    name: "Whimsy Blue 4",
    hex: "#9187F6",
  },
  {
    name: "Whimsy Blue 5",
    hex: "#9E96F7",
  },
  {
    name: "Whimsy Blue 6",
    hex: "#ACA5F8",
  },
  {
    name: "Whimsy Blue 7",
    hex: "#BAB4F9",
  },
  {
    name: "Whimsy Blue 8",
    hex: "#C8C3FB",
  },
  {
    name: "Whimsy Blue 9",
    hex: "#F6F6FE",
  },
];

export default function Command() {
  return (
    <List>
      {COLORS.map((c, k) => (
        <List.Item
          key={k}
          icon={`data:image/svg+xml;utf8,<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="32" height="32" rx="16" fill="${c.hex}" />
</svg>`}
          title={c.name}
          accessories={[{ text: c.hex }]}
          actions={
            <ActionPanel>
              <Action.CopyToClipboard content={c.hex} />
            </ActionPanel>
          }
        />
      ))}
    </List>
  );
}
