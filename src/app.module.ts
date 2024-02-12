import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
// import { UsersnpmService } from './run/usersnpm/usersnpm.service';
import { EmployeesModule } from './employees/employees.module';
import { EmloyeesModule } from './emloyees/emloyees.module';
import { DatabaseModule } from './database/database.module';
// import { UsersnpmService } from './run/usersnpm/usersnpm.service';

@Module({
  imports: [UsersModule, DatabaseModule, EmloyeesModule, EmployeesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
