from django.contrib import admin
from .models import (
    ForwardedMessage,
    Message,
    MessageAction,
    Thread,
    ThreadAction,
    ThreadMember,
)

admin.site.register(ThreadAction)
admin.site.register(Thread)
admin.site.register(MessageAction)
admin.site.register(ThreadMember)
admin.site.register(Message)
admin.site.register(ForwardedMessage)

# Register your models here.
