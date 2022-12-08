import { Injectable } from '@nestjs/common';
import { Template } from './template';
import got from 'got';

@Injectable()
export class AppService {
  private readonly defaultMessage: string;

  constructor() {
    this.defaultMessage = `
      <html lang='us'>
        <head>
          <title>webhook-forwarder</title>
        </head>
        <body>
          <span>Here is <a href='https://github.com/Bpazy/webhook-forwarder2'>webhook-forwarder</a></span>
        </body>
      </html>`;
  }

  getHello(): string {
    return this.defaultMessage;
  }

  async forward(templateId: string) {
    const template = new Template(templateId);
    const target = template.run();
    console.log(target);
    // TODO forward
    const ret = got.post('', {});
    console.log(ret);
  }
}
