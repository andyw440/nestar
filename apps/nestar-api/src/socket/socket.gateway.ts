import { Logger } from '@nestjs/common';
import { OnGatewayInit, SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { Server } from 'node_modules/@types/ws/index.mjs';

@WebSocketGateway({transports:["websocket"], secure: false })
export class SocketGateway implements OnGatewayInit {
  public logger: Logger = new Logger("SocketEventsGateWay")
  private summaryClient:number = 0
 public afterInit(server: Server) {
      this.logger.log(`WebSocket Server Initialized total: ${this.summaryClient}`)
  }

  handleConnection(client:WebSocket, ...args:any[]) {
    this.summaryClient++;
    this.logger.log(`== Client connected total: ${this.summaryClient} ==`)
  }

    handleDisconnect(client:WebSocket) {
    this.summaryClient--;
    this.logger.log(`== Client disconnected, left total: ${this.summaryClient} ==`)
  }

  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    return 'Hello world!';
  }
}
