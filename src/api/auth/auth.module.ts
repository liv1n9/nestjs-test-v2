import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { UsersModule } from "../users/users.module";
import { PassportModule } from "@nestjs/passport";
import { LocalStrategy } from "./local.strategy";
import { AuthController } from './auth.controller';
import { JwtModule } from "@nestjs/jwt";
import { JwtStrategy } from "./jwt.strategy";
import { JWT_SECRET } from "../../config/secrets";

@Module({
    imports: [
        UsersModule,
        PassportModule,
        JwtModule.register({
            secret: JWT_SECRET,
            signOptions: {
                expiresIn: "365d"
            }
        }),
    ],
    providers: [AuthService, LocalStrategy, JwtStrategy],
    controllers: [AuthController]
})
export class AuthModule { }
