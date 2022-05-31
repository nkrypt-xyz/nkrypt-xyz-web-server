/* eslint-disable no-var */
import { Logger } from "./lib/logger";
import { AdminService } from "./service/admin-service";
import { BucketService } from "./service/bucket-service";
import { DirectoryService } from "./service/directory-service";
import { FileService } from "./service/file-service";
import { SessionService } from "./service/session-service";
import { UserService } from "./service/user-service";
import { AuthService } from "./service/auth-service";

declare global {
  var logger: Logger;
  var dispatch: {
    userService: UserService;
    sessionService: SessionService;
    adminService: AdminService;
    bucketService: BucketService;
    directoryService: DirectoryService;
    fileService: FileService;
    authService: AuthService;
  };
}

type JsonValue =
  | string
  | number
  | boolean
  | { [x: string]: JsonValue }
  | Array<JsonValue>;

// We type-alias any as Generic to easily mark improvement scopes without adding comments
type Generic = any;

type GlobalPermissions = {
  MANAGE_ALL_USER: boolean;
  CREATE_USER: boolean;
};

type SerializedError = {
  code: string;
  message: string;
  details: any;
};
