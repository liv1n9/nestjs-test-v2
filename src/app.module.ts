import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthModule } from "./api/auth/auth.module";
import { UsersModule } from "./api/users/users.module";
import { BooksModule } from "./api/books/books.module";
import { DATABASE_URI } from "./config/secrets";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: "mongodb",
            url: DATABASE_URI,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            logging: true,
            synchronize: true,
            entities: [
                "dist/**/*.entity.{ts,js}"
            ],
        }),
        AuthModule,
        UsersModule,
        BooksModule,
    ],
})
export class AppModule { }