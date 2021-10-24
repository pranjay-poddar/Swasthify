import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WebSocketService } from '../../services/web-socket.service';
import { ChatMessageDto } from '../../models/chatMessageDto';
import { ChatDataTransferService } from 'src/app/services/chat-data-transfer.service';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {

  emailId ! : String;
  constructor(public webSocketService: WebSocketService, private chatService : ChatDataTransferService) { }

  ngOnInit(): void {
    this.webSocketService.openWebSocket();
  }

  ngOnDestroy(): void {
    this.webSocketService.closeWebSocket();
  }

  sendMessage(sendForm: NgForm) {
    this.emailId = this.chatService.emailId;
    const chatMessageDto = new ChatMessageDto(this.chatService.user, this.chatService.emailId , sendForm.value.message);
    this.webSocketService.sendMessage(chatMessageDto);
    sendForm.controls.message.reset();
    console.log(this.emailId);
  }
}
