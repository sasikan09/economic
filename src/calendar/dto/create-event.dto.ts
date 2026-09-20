import { IsNotEmpty, IsString, IsIn } from 'class-validator';

export class CreateEventDto {
  @IsNotEmpty({ message: 'กรุณาระบุชื่อเหตุการณ์' })
  @IsString()
  event_name: string;

  @IsNotEmpty({ message: 'กรุณาระบุสกุลเงิน/ประเทศ' })
  @IsString()
  country: string;

  @IsNotEmpty({ message: 'กรุณาระบุระดับความสำคัญ' })
  @IsIn(['HIGH', 'MEDIUM', 'LOW', 'High', 'Medium', 'Low'], { 
    message: 'Impact ต้องเป็น HIGH, MEDIUM หรือ LOW เท่านั้น' 
  })
  impact: string;

  @IsNotEmpty({ message: 'กรุณาระบุค่าตัวเลขจริง' })
  @IsString()
  actual: string;

  @IsNotEmpty({ message: 'กรุณาระบุค่าตัวเลขคาดการณ์' })
  @IsString()
  forecast: string;

  @IsNotEmpty({ message: 'กรุณาระบุค่าครั้งก่อน' })
  @IsString()
  previous: string;

  @IsNotEmpty({ message: 'กรุณาระบุวันเวลา' })
  @IsString()
  date_time: string;

  @IsNotEmpty({ message: 'กรุณาระบุ Sentiment' })
  @IsString()
  sentiment: string;
}