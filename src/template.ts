export class Template {
  private readonly forwardBody: string;
  private readonly templateId: string;

  constructor(templateId: string) {
    this.templateId = templateId;
  }

  run(): Target {
    return new Target(null, null);
  }
}

export class Target {
  constructor(private readonly target: string, private readonly payload: any) {}
}
