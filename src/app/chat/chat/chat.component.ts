import { Component, OnInit, OnDestroy,AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WebSocketService } from '../../services/web-socket.service';
import { ChatMessageDto } from '../../models/chatMessageDto';
import { ChatDataTransferService } from 'src/app/services/chat-data-transfer.service';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy, AfterViewChecked {

  emailId ! : String;
  constructor(public webSocketService: WebSocketService, private chatService : ChatDataTransferService) { }
  @ViewChild('scrollMe') private myScrollContainer!: ElementRef;
  ngOnInit(): void {
    this.webSocketService.openWebSocket();
    this.scrollToBottom();
  }

  ngOnDestroy(): void {
    this.webSocketService.closeWebSocket();
  }

  ngAfterViewChecked() {        
    this.scrollToBottom();        
} 
scrollToBottom(): void {
  try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
  } catch(err) { }                 
}

  sendMessage(sendForm: NgForm) {
    this.emailId = this.chatService.emailId;
    const chatMessageDto = new ChatMessageDto(this.chatService.user, this.chatService.emailId , sendForm.value.message);
    this.webSocketService.sendMessage(chatMessageDto);
    sendForm.controls.message.reset();
    console.log(this.emailId);
  }
}
