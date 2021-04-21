export interface Component {
  render: () => Promise<string>;
  afterRender: () => Promise<void>;
}
