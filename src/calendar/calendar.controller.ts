import { Controller, Get, Post, Body, ValidationPipe, UsePipes } from '@nestjs/common';
import { CalendarService } from './calendar.service';
import { CreateEventDto } from './dto/create-event.dto';

@Controller('api/v1/calendar')
export class CalendarController {
  constructor(private readonly calendarService: CalendarService) {}

  @Get('events')
  async getEvents() {
    const events = await this.calendarService.findAll();
    return {
      status: 'success',
      data: events,
    };
  }


@Post('events')
  @UsePipes(new ValidationPipe({ whitelist: true, transform: true }))
  async createEvent(@Body() createEventDto: CreateEventDto) {
    const newEvent = await this.calendarService.create(createEventDto);
    return {
      status: 'success',
      message: 'สร้างเหตุการณ์สำเร็จ',
      data: newEvent,
    };
  }
}