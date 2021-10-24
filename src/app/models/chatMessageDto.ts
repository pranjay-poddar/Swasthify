export class ChatMessageDto {
    user: String;
    emailId : String;
    message: string;

    constructor(user: String, emailId : String, message: string){
        this.user = user;
        this.emailId = emailId
        this.message = message;
    }
}
