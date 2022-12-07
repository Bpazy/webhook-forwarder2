import { Injectable } from '@nestjs/common';

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
}
