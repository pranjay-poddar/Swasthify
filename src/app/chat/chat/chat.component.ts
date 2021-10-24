import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WebSocketService } from '../../services/web-socket.service';
import { ChatMessageDto } from '../../models/chatMessageDto';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {

  constructor(public webSocketService: WebSocketService) { }

  ngOnInit(): void {
    this.webSocketService.openWebSocket();
  }

  ngOnDestroy(): void {
    this.webSocketService.closeWebSocket();
  }

  sendMessage(sendForm: NgForm) {
    const chatMessageDto = new ChatMessageDto(sendForm.value.user, sendForm.value.message);
    this.webSocketService.sendMessage(chatMessageDto);
    sendForm.controls.message.reset();
    console.log(this.webSocketService)
  }
}
