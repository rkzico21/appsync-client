// eslint-disable
// this is an auto generated file. This will be overwritten

export const createStory = `mutation CreateStory($id: String!, $title: String!) {
  createStory(id: $id, title: $title) {
    id
    title
  }
}
`;
export const createItem = `mutation CreateItem($id: String!, $title: String!) {
  createItem(id: $id, title: $title) {
    id
    title
  }
}
`;
export const addItemsToStory = `mutation AddItemsToStory($storyId: String!, $items: [String]!) {
  addItemsToStory(storyId: $storyId, items: $items) {
    id
    title
  }
}
`;
