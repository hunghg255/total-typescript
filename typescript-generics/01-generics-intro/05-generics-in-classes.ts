export class Component<TProps> {
  private props: TProps;

  constructor(props: TProps) {
    this.props = props;
  }

  getProps = () => this.props;
}

const component = new Component({ a: 1, b: 2, c: 3 });

const result = component.getProps();
