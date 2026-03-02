
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model AdminUser
 * 
 */
export type AdminUser = $Result.DefaultSelection<Prisma.$AdminUserPayload>
/**
 * Model Pharmacy
 * 
 */
export type Pharmacy = $Result.DefaultSelection<Prisma.$PharmacyPayload>
/**
 * Model Vendor
 * 
 */
export type Vendor = $Result.DefaultSelection<Prisma.$VendorPayload>
/**
 * Model Delegue
 * 
 */
export type Delegue = $Result.DefaultSelection<Prisma.$DeleguePayload>
/**
 * Model DelegueQrCode
 * 
 */
export type DelegueQrCode = $Result.DefaultSelection<Prisma.$DelegueQrCodePayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Sale
 * 
 */
export type Sale = $Result.DefaultSelection<Prisma.$SalePayload>
/**
 * Model PaymentPeriod
 * 
 */
export type PaymentPeriod = $Result.DefaultSelection<Prisma.$PaymentPeriodPayload>
/**
 * Model CommissionRule
 * 
 */
export type CommissionRule = $Result.DefaultSelection<Prisma.$CommissionRulePayload>
/**
 * Model QrCode
 * 
 */
export type QrCode = $Result.DefaultSelection<Prisma.$QrCodePayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model VendorNotification
 * 
 */
export type VendorNotification = $Result.DefaultSelection<Prisma.$VendorNotificationPayload>
/**
 * Model DelegueNotification
 * 
 */
export type DelegueNotification = $Result.DefaultSelection<Prisma.$DelegueNotificationPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more AdminUsers
 * const adminUsers = await prisma.adminUser.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more AdminUsers
   * const adminUsers = await prisma.adminUser.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.adminUser`: Exposes CRUD operations for the **AdminUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdminUsers
    * const adminUsers = await prisma.adminUser.findMany()
    * ```
    */
  get adminUser(): Prisma.AdminUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pharmacy`: Exposes CRUD operations for the **Pharmacy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pharmacies
    * const pharmacies = await prisma.pharmacy.findMany()
    * ```
    */
  get pharmacy(): Prisma.PharmacyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vendor`: Exposes CRUD operations for the **Vendor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vendors
    * const vendors = await prisma.vendor.findMany()
    * ```
    */
  get vendor(): Prisma.VendorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.delegue`: Exposes CRUD operations for the **Delegue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Delegues
    * const delegues = await prisma.delegue.findMany()
    * ```
    */
  get delegue(): Prisma.DelegueDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.delegueQrCode`: Exposes CRUD operations for the **DelegueQrCode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DelegueQrCodes
    * const delegueQrCodes = await prisma.delegueQrCode.findMany()
    * ```
    */
  get delegueQrCode(): Prisma.DelegueQrCodeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sale`: Exposes CRUD operations for the **Sale** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sales
    * const sales = await prisma.sale.findMany()
    * ```
    */
  get sale(): Prisma.SaleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paymentPeriod`: Exposes CRUD operations for the **PaymentPeriod** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentPeriods
    * const paymentPeriods = await prisma.paymentPeriod.findMany()
    * ```
    */
  get paymentPeriod(): Prisma.PaymentPeriodDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.commissionRule`: Exposes CRUD operations for the **CommissionRule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CommissionRules
    * const commissionRules = await prisma.commissionRule.findMany()
    * ```
    */
  get commissionRule(): Prisma.CommissionRuleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.qrCode`: Exposes CRUD operations for the **QrCode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QrCodes
    * const qrCodes = await prisma.qrCode.findMany()
    * ```
    */
  get qrCode(): Prisma.QrCodeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vendorNotification`: Exposes CRUD operations for the **VendorNotification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VendorNotifications
    * const vendorNotifications = await prisma.vendorNotification.findMany()
    * ```
    */
  get vendorNotification(): Prisma.VendorNotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.delegueNotification`: Exposes CRUD operations for the **DelegueNotification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DelegueNotifications
    * const delegueNotifications = await prisma.delegueNotification.findMany()
    * ```
    */
  get delegueNotification(): Prisma.DelegueNotificationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.2
   * Query Engine version: 94a226be1cf2967af2541cca5529f0f7ba866919
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    AdminUser: 'AdminUser',
    Pharmacy: 'Pharmacy',
    Vendor: 'Vendor',
    Delegue: 'Delegue',
    DelegueQrCode: 'DelegueQrCode',
    Product: 'Product',
    Sale: 'Sale',
    PaymentPeriod: 'PaymentPeriod',
    CommissionRule: 'CommissionRule',
    QrCode: 'QrCode',
    Notification: 'Notification',
    VendorNotification: 'VendorNotification',
    DelegueNotification: 'DelegueNotification'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "adminUser" | "pharmacy" | "vendor" | "delegue" | "delegueQrCode" | "product" | "sale" | "paymentPeriod" | "commissionRule" | "qrCode" | "notification" | "vendorNotification" | "delegueNotification"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      AdminUser: {
        payload: Prisma.$AdminUserPayload<ExtArgs>
        fields: Prisma.AdminUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          findFirst: {
            args: Prisma.AdminUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          findMany: {
            args: Prisma.AdminUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>[]
          }
          create: {
            args: Prisma.AdminUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          createMany: {
            args: Prisma.AdminUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AdminUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          update: {
            args: Prisma.AdminUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          deleteMany: {
            args: Prisma.AdminUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdminUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          aggregate: {
            args: Prisma.AdminUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdminUser>
          }
          groupBy: {
            args: Prisma.AdminUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminUserCountArgs<ExtArgs>
            result: $Utils.Optional<AdminUserCountAggregateOutputType> | number
          }
        }
      }
      Pharmacy: {
        payload: Prisma.$PharmacyPayload<ExtArgs>
        fields: Prisma.PharmacyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PharmacyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PharmacyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyPayload>
          }
          findFirst: {
            args: Prisma.PharmacyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PharmacyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyPayload>
          }
          findMany: {
            args: Prisma.PharmacyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyPayload>[]
          }
          create: {
            args: Prisma.PharmacyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyPayload>
          }
          createMany: {
            args: Prisma.PharmacyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PharmacyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyPayload>
          }
          update: {
            args: Prisma.PharmacyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyPayload>
          }
          deleteMany: {
            args: Prisma.PharmacyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PharmacyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PharmacyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmacyPayload>
          }
          aggregate: {
            args: Prisma.PharmacyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePharmacy>
          }
          groupBy: {
            args: Prisma.PharmacyGroupByArgs<ExtArgs>
            result: $Utils.Optional<PharmacyGroupByOutputType>[]
          }
          count: {
            args: Prisma.PharmacyCountArgs<ExtArgs>
            result: $Utils.Optional<PharmacyCountAggregateOutputType> | number
          }
        }
      }
      Vendor: {
        payload: Prisma.$VendorPayload<ExtArgs>
        fields: Prisma.VendorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VendorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VendorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          findFirst: {
            args: Prisma.VendorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VendorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          findMany: {
            args: Prisma.VendorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>[]
          }
          create: {
            args: Prisma.VendorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          createMany: {
            args: Prisma.VendorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VendorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          update: {
            args: Prisma.VendorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          deleteMany: {
            args: Prisma.VendorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VendorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VendorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          aggregate: {
            args: Prisma.VendorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVendor>
          }
          groupBy: {
            args: Prisma.VendorGroupByArgs<ExtArgs>
            result: $Utils.Optional<VendorGroupByOutputType>[]
          }
          count: {
            args: Prisma.VendorCountArgs<ExtArgs>
            result: $Utils.Optional<VendorCountAggregateOutputType> | number
          }
        }
      }
      Delegue: {
        payload: Prisma.$DeleguePayload<ExtArgs>
        fields: Prisma.DelegueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DelegueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeleguePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DelegueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeleguePayload>
          }
          findFirst: {
            args: Prisma.DelegueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeleguePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DelegueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeleguePayload>
          }
          findMany: {
            args: Prisma.DelegueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeleguePayload>[]
          }
          create: {
            args: Prisma.DelegueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeleguePayload>
          }
          createMany: {
            args: Prisma.DelegueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DelegueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeleguePayload>
          }
          update: {
            args: Prisma.DelegueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeleguePayload>
          }
          deleteMany: {
            args: Prisma.DelegueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DelegueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DelegueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeleguePayload>
          }
          aggregate: {
            args: Prisma.DelegueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDelegue>
          }
          groupBy: {
            args: Prisma.DelegueGroupByArgs<ExtArgs>
            result: $Utils.Optional<DelegueGroupByOutputType>[]
          }
          count: {
            args: Prisma.DelegueCountArgs<ExtArgs>
            result: $Utils.Optional<DelegueCountAggregateOutputType> | number
          }
        }
      }
      DelegueQrCode: {
        payload: Prisma.$DelegueQrCodePayload<ExtArgs>
        fields: Prisma.DelegueQrCodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DelegueQrCodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DelegueQrCodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DelegueQrCodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DelegueQrCodePayload>
          }
          findFirst: {
            args: Prisma.DelegueQrCodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DelegueQrCodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DelegueQrCodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DelegueQrCodePayload>
          }
          findMany: {
            args: Prisma.DelegueQrCodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DelegueQrCodePayload>[]
          }
          create: {
            args: Prisma.DelegueQrCodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DelegueQrCodePayload>
          }
          createMany: {
            args: Prisma.DelegueQrCodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DelegueQrCodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DelegueQrCodePayload>
          }
          update: {
            args: Prisma.DelegueQrCodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DelegueQrCodePayload>
          }
          deleteMany: {
            args: Prisma.DelegueQrCodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DelegueQrCodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DelegueQrCodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DelegueQrCodePayload>
          }
          aggregate: {
            args: Prisma.DelegueQrCodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDelegueQrCode>
          }
          groupBy: {
            args: Prisma.DelegueQrCodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<DelegueQrCodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.DelegueQrCodeCountArgs<ExtArgs>
            result: $Utils.Optional<DelegueQrCodeCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Sale: {
        payload: Prisma.$SalePayload<ExtArgs>
        fields: Prisma.SaleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SaleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SaleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          findFirst: {
            args: Prisma.SaleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SaleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          findMany: {
            args: Prisma.SaleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>[]
          }
          create: {
            args: Prisma.SaleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          createMany: {
            args: Prisma.SaleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SaleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          update: {
            args: Prisma.SaleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          deleteMany: {
            args: Prisma.SaleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SaleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SaleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          aggregate: {
            args: Prisma.SaleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSale>
          }
          groupBy: {
            args: Prisma.SaleGroupByArgs<ExtArgs>
            result: $Utils.Optional<SaleGroupByOutputType>[]
          }
          count: {
            args: Prisma.SaleCountArgs<ExtArgs>
            result: $Utils.Optional<SaleCountAggregateOutputType> | number
          }
        }
      }
      PaymentPeriod: {
        payload: Prisma.$PaymentPeriodPayload<ExtArgs>
        fields: Prisma.PaymentPeriodFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentPeriodFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPeriodPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentPeriodFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPeriodPayload>
          }
          findFirst: {
            args: Prisma.PaymentPeriodFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPeriodPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentPeriodFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPeriodPayload>
          }
          findMany: {
            args: Prisma.PaymentPeriodFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPeriodPayload>[]
          }
          create: {
            args: Prisma.PaymentPeriodCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPeriodPayload>
          }
          createMany: {
            args: Prisma.PaymentPeriodCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PaymentPeriodDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPeriodPayload>
          }
          update: {
            args: Prisma.PaymentPeriodUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPeriodPayload>
          }
          deleteMany: {
            args: Prisma.PaymentPeriodDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentPeriodUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PaymentPeriodUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPeriodPayload>
          }
          aggregate: {
            args: Prisma.PaymentPeriodAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaymentPeriod>
          }
          groupBy: {
            args: Prisma.PaymentPeriodGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentPeriodGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentPeriodCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentPeriodCountAggregateOutputType> | number
          }
        }
      }
      CommissionRule: {
        payload: Prisma.$CommissionRulePayload<ExtArgs>
        fields: Prisma.CommissionRuleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommissionRuleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommissionRulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommissionRuleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommissionRulePayload>
          }
          findFirst: {
            args: Prisma.CommissionRuleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommissionRulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommissionRuleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommissionRulePayload>
          }
          findMany: {
            args: Prisma.CommissionRuleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommissionRulePayload>[]
          }
          create: {
            args: Prisma.CommissionRuleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommissionRulePayload>
          }
          createMany: {
            args: Prisma.CommissionRuleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CommissionRuleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommissionRulePayload>
          }
          update: {
            args: Prisma.CommissionRuleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommissionRulePayload>
          }
          deleteMany: {
            args: Prisma.CommissionRuleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommissionRuleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CommissionRuleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommissionRulePayload>
          }
          aggregate: {
            args: Prisma.CommissionRuleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommissionRule>
          }
          groupBy: {
            args: Prisma.CommissionRuleGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommissionRuleGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommissionRuleCountArgs<ExtArgs>
            result: $Utils.Optional<CommissionRuleCountAggregateOutputType> | number
          }
        }
      }
      QrCode: {
        payload: Prisma.$QrCodePayload<ExtArgs>
        fields: Prisma.QrCodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QrCodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QrCodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QrCodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QrCodePayload>
          }
          findFirst: {
            args: Prisma.QrCodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QrCodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QrCodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QrCodePayload>
          }
          findMany: {
            args: Prisma.QrCodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QrCodePayload>[]
          }
          create: {
            args: Prisma.QrCodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QrCodePayload>
          }
          createMany: {
            args: Prisma.QrCodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.QrCodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QrCodePayload>
          }
          update: {
            args: Prisma.QrCodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QrCodePayload>
          }
          deleteMany: {
            args: Prisma.QrCodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QrCodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QrCodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QrCodePayload>
          }
          aggregate: {
            args: Prisma.QrCodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQrCode>
          }
          groupBy: {
            args: Prisma.QrCodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<QrCodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.QrCodeCountArgs<ExtArgs>
            result: $Utils.Optional<QrCodeCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      VendorNotification: {
        payload: Prisma.$VendorNotificationPayload<ExtArgs>
        fields: Prisma.VendorNotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VendorNotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorNotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VendorNotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorNotificationPayload>
          }
          findFirst: {
            args: Prisma.VendorNotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorNotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VendorNotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorNotificationPayload>
          }
          findMany: {
            args: Prisma.VendorNotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorNotificationPayload>[]
          }
          create: {
            args: Prisma.VendorNotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorNotificationPayload>
          }
          createMany: {
            args: Prisma.VendorNotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VendorNotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorNotificationPayload>
          }
          update: {
            args: Prisma.VendorNotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorNotificationPayload>
          }
          deleteMany: {
            args: Prisma.VendorNotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VendorNotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VendorNotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorNotificationPayload>
          }
          aggregate: {
            args: Prisma.VendorNotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVendorNotification>
          }
          groupBy: {
            args: Prisma.VendorNotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<VendorNotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.VendorNotificationCountArgs<ExtArgs>
            result: $Utils.Optional<VendorNotificationCountAggregateOutputType> | number
          }
        }
      }
      DelegueNotification: {
        payload: Prisma.$DelegueNotificationPayload<ExtArgs>
        fields: Prisma.DelegueNotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DelegueNotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DelegueNotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DelegueNotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DelegueNotificationPayload>
          }
          findFirst: {
            args: Prisma.DelegueNotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DelegueNotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DelegueNotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DelegueNotificationPayload>
          }
          findMany: {
            args: Prisma.DelegueNotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DelegueNotificationPayload>[]
          }
          create: {
            args: Prisma.DelegueNotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DelegueNotificationPayload>
          }
          createMany: {
            args: Prisma.DelegueNotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DelegueNotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DelegueNotificationPayload>
          }
          update: {
            args: Prisma.DelegueNotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DelegueNotificationPayload>
          }
          deleteMany: {
            args: Prisma.DelegueNotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DelegueNotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DelegueNotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DelegueNotificationPayload>
          }
          aggregate: {
            args: Prisma.DelegueNotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDelegueNotification>
          }
          groupBy: {
            args: Prisma.DelegueNotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<DelegueNotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.DelegueNotificationCountArgs<ExtArgs>
            result: $Utils.Optional<DelegueNotificationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    adminUser?: AdminUserOmit
    pharmacy?: PharmacyOmit
    vendor?: VendorOmit
    delegue?: DelegueOmit
    delegueQrCode?: DelegueQrCodeOmit
    product?: ProductOmit
    sale?: SaleOmit
    paymentPeriod?: PaymentPeriodOmit
    commissionRule?: CommissionRuleOmit
    qrCode?: QrCodeOmit
    notification?: NotificationOmit
    vendorNotification?: VendorNotificationOmit
    delegueNotification?: DelegueNotificationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PharmacyCountOutputType
   */

  export type PharmacyCountOutputType = {
    vendors: number
  }

  export type PharmacyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendors?: boolean | PharmacyCountOutputTypeCountVendorsArgs
  }

  // Custom InputTypes
  /**
   * PharmacyCountOutputType without action
   */
  export type PharmacyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PharmacyCountOutputType
     */
    select?: PharmacyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PharmacyCountOutputType without action
   */
  export type PharmacyCountOutputTypeCountVendorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VendorWhereInput
  }


  /**
   * Count Type VendorCountOutputType
   */

  export type VendorCountOutputType = {
    sales: number
    paymentPeriods: number
    qrCodes: number
    notifications: number
  }

  export type VendorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sales?: boolean | VendorCountOutputTypeCountSalesArgs
    paymentPeriods?: boolean | VendorCountOutputTypeCountPaymentPeriodsArgs
    qrCodes?: boolean | VendorCountOutputTypeCountQrCodesArgs
    notifications?: boolean | VendorCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * VendorCountOutputType without action
   */
  export type VendorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorCountOutputType
     */
    select?: VendorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VendorCountOutputType without action
   */
  export type VendorCountOutputTypeCountSalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleWhereInput
  }

  /**
   * VendorCountOutputType without action
   */
  export type VendorCountOutputTypeCountPaymentPeriodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentPeriodWhereInput
  }

  /**
   * VendorCountOutputType without action
   */
  export type VendorCountOutputTypeCountQrCodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QrCodeWhereInput
  }

  /**
   * VendorCountOutputType without action
   */
  export type VendorCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VendorNotificationWhereInput
  }


  /**
   * Count Type DelegueCountOutputType
   */

  export type DelegueCountOutputType = {
    qrCodes: number
    notifications: number
  }

  export type DelegueCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    qrCodes?: boolean | DelegueCountOutputTypeCountQrCodesArgs
    notifications?: boolean | DelegueCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * DelegueCountOutputType without action
   */
  export type DelegueCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DelegueCountOutputType
     */
    select?: DelegueCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DelegueCountOutputType without action
   */
  export type DelegueCountOutputTypeCountQrCodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DelegueQrCodeWhereInput
  }

  /**
   * DelegueCountOutputType without action
   */
  export type DelegueCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DelegueNotificationWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    sales: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sales?: boolean | ProductCountOutputTypeCountSalesArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountSalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleWhereInput
  }


  /**
   * Count Type PaymentPeriodCountOutputType
   */

  export type PaymentPeriodCountOutputType = {
    sales: number
  }

  export type PaymentPeriodCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sales?: boolean | PaymentPeriodCountOutputTypeCountSalesArgs
  }

  // Custom InputTypes
  /**
   * PaymentPeriodCountOutputType without action
   */
  export type PaymentPeriodCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPeriodCountOutputType
     */
    select?: PaymentPeriodCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PaymentPeriodCountOutputType without action
   */
  export type PaymentPeriodCountOutputTypeCountSalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleWhereInput
  }


  /**
   * Count Type NotificationCountOutputType
   */

  export type NotificationCountOutputType = {
    vendorNotifications: number
    delegueNotifications: number
  }

  export type NotificationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendorNotifications?: boolean | NotificationCountOutputTypeCountVendorNotificationsArgs
    delegueNotifications?: boolean | NotificationCountOutputTypeCountDelegueNotificationsArgs
  }

  // Custom InputTypes
  /**
   * NotificationCountOutputType without action
   */
  export type NotificationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationCountOutputType
     */
    select?: NotificationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NotificationCountOutputType without action
   */
  export type NotificationCountOutputTypeCountVendorNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VendorNotificationWhereInput
  }

  /**
   * NotificationCountOutputType without action
   */
  export type NotificationCountOutputTypeCountDelegueNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DelegueNotificationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model AdminUser
   */

  export type AggregateAdminUser = {
    _count: AdminUserCountAggregateOutputType | null
    _min: AdminUserMinAggregateOutputType | null
    _max: AdminUserMaxAggregateOutputType | null
  }

  export type AdminUserMinAggregateOutputType = {
    id: string | null
    phone: string | null
    passwordHash: string | null
    name: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminUserMaxAggregateOutputType = {
    id: string | null
    phone: string | null
    passwordHash: string | null
    name: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminUserCountAggregateOutputType = {
    id: number
    phone: number
    passwordHash: number
    name: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdminUserMinAggregateInputType = {
    id?: true
    phone?: true
    passwordHash?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminUserMaxAggregateInputType = {
    id?: true
    phone?: true
    passwordHash?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminUserCountAggregateInputType = {
    id?: true
    phone?: true
    passwordHash?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdminUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminUser to aggregate.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdminUsers
    **/
    _count?: true | AdminUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminUserMaxAggregateInputType
  }

  export type GetAdminUserAggregateType<T extends AdminUserAggregateArgs> = {
        [P in keyof T & keyof AggregateAdminUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdminUser[P]>
      : GetScalarType<T[P], AggregateAdminUser[P]>
  }




  export type AdminUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminUserWhereInput
    orderBy?: AdminUserOrderByWithAggregationInput | AdminUserOrderByWithAggregationInput[]
    by: AdminUserScalarFieldEnum[] | AdminUserScalarFieldEnum
    having?: AdminUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminUserCountAggregateInputType | true
    _min?: AdminUserMinAggregateInputType
    _max?: AdminUserMaxAggregateInputType
  }

  export type AdminUserGroupByOutputType = {
    id: string
    phone: string
    passwordHash: string
    name: string
    role: string
    createdAt: Date
    updatedAt: Date
    _count: AdminUserCountAggregateOutputType | null
    _min: AdminUserMinAggregateOutputType | null
    _max: AdminUserMaxAggregateOutputType | null
  }

  type GetAdminUserGroupByPayload<T extends AdminUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminUserGroupByOutputType[P]>
            : GetScalarType<T[P], AdminUserGroupByOutputType[P]>
        }
      >
    >


  export type AdminUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    passwordHash?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["adminUser"]>



  export type AdminUserSelectScalar = {
    id?: boolean
    phone?: boolean
    passwordHash?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdminUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "phone" | "passwordHash" | "name" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["adminUser"]>

  export type $AdminUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdminUser"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      phone: string
      passwordHash: string
      name: string
      role: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["adminUser"]>
    composites: {}
  }

  type AdminUserGetPayload<S extends boolean | null | undefined | AdminUserDefaultArgs> = $Result.GetResult<Prisma.$AdminUserPayload, S>

  type AdminUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminUserCountAggregateInputType | true
    }

  export interface AdminUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdminUser'], meta: { name: 'AdminUser' } }
    /**
     * Find zero or one AdminUser that matches the filter.
     * @param {AdminUserFindUniqueArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminUserFindUniqueArgs>(args: SelectSubset<T, AdminUserFindUniqueArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AdminUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminUserFindUniqueOrThrowArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminUserFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindFirstArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminUserFindFirstArgs>(args?: SelectSubset<T, AdminUserFindFirstArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindFirstOrThrowArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminUserFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AdminUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdminUsers
     * const adminUsers = await prisma.adminUser.findMany()
     * 
     * // Get first 10 AdminUsers
     * const adminUsers = await prisma.adminUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminUserWithIdOnly = await prisma.adminUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminUserFindManyArgs>(args?: SelectSubset<T, AdminUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AdminUser.
     * @param {AdminUserCreateArgs} args - Arguments to create a AdminUser.
     * @example
     * // Create one AdminUser
     * const AdminUser = await prisma.adminUser.create({
     *   data: {
     *     // ... data to create a AdminUser
     *   }
     * })
     * 
     */
    create<T extends AdminUserCreateArgs>(args: SelectSubset<T, AdminUserCreateArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AdminUsers.
     * @param {AdminUserCreateManyArgs} args - Arguments to create many AdminUsers.
     * @example
     * // Create many AdminUsers
     * const adminUser = await prisma.adminUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminUserCreateManyArgs>(args?: SelectSubset<T, AdminUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AdminUser.
     * @param {AdminUserDeleteArgs} args - Arguments to delete one AdminUser.
     * @example
     * // Delete one AdminUser
     * const AdminUser = await prisma.adminUser.delete({
     *   where: {
     *     // ... filter to delete one AdminUser
     *   }
     * })
     * 
     */
    delete<T extends AdminUserDeleteArgs>(args: SelectSubset<T, AdminUserDeleteArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AdminUser.
     * @param {AdminUserUpdateArgs} args - Arguments to update one AdminUser.
     * @example
     * // Update one AdminUser
     * const adminUser = await prisma.adminUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUserUpdateArgs>(args: SelectSubset<T, AdminUserUpdateArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AdminUsers.
     * @param {AdminUserDeleteManyArgs} args - Arguments to filter AdminUsers to delete.
     * @example
     * // Delete a few AdminUsers
     * const { count } = await prisma.adminUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminUserDeleteManyArgs>(args?: SelectSubset<T, AdminUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdminUsers
     * const adminUser = await prisma.adminUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUserUpdateManyArgs>(args: SelectSubset<T, AdminUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AdminUser.
     * @param {AdminUserUpsertArgs} args - Arguments to update or create a AdminUser.
     * @example
     * // Update or create a AdminUser
     * const adminUser = await prisma.adminUser.upsert({
     *   create: {
     *     // ... data to create a AdminUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdminUser we want to update
     *   }
     * })
     */
    upsert<T extends AdminUserUpsertArgs>(args: SelectSubset<T, AdminUserUpsertArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AdminUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserCountArgs} args - Arguments to filter AdminUsers to count.
     * @example
     * // Count the number of AdminUsers
     * const count = await prisma.adminUser.count({
     *   where: {
     *     // ... the filter for the AdminUsers we want to count
     *   }
     * })
    **/
    count<T extends AdminUserCountArgs>(
      args?: Subset<T, AdminUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdminUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminUserAggregateArgs>(args: Subset<T, AdminUserAggregateArgs>): Prisma.PrismaPromise<GetAdminUserAggregateType<T>>

    /**
     * Group by AdminUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminUserGroupByArgs['orderBy'] }
        : { orderBy?: AdminUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdminUser model
   */
  readonly fields: AdminUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdminUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AdminUser model
   */
  interface AdminUserFieldRefs {
    readonly id: FieldRef<"AdminUser", 'String'>
    readonly phone: FieldRef<"AdminUser", 'String'>
    readonly passwordHash: FieldRef<"AdminUser", 'String'>
    readonly name: FieldRef<"AdminUser", 'String'>
    readonly role: FieldRef<"AdminUser", 'String'>
    readonly createdAt: FieldRef<"AdminUser", 'DateTime'>
    readonly updatedAt: FieldRef<"AdminUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AdminUser findUnique
   */
  export type AdminUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser findUniqueOrThrow
   */
  export type AdminUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser findFirst
   */
  export type AdminUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminUsers.
     */
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser findFirstOrThrow
   */
  export type AdminUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminUsers.
     */
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser findMany
   */
  export type AdminUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUsers to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser create
   */
  export type AdminUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The data needed to create a AdminUser.
     */
    data: XOR<AdminUserCreateInput, AdminUserUncheckedCreateInput>
  }

  /**
   * AdminUser createMany
   */
  export type AdminUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdminUsers.
     */
    data: AdminUserCreateManyInput | AdminUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminUser update
   */
  export type AdminUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The data needed to update a AdminUser.
     */
    data: XOR<AdminUserUpdateInput, AdminUserUncheckedUpdateInput>
    /**
     * Choose, which AdminUser to update.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser updateMany
   */
  export type AdminUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdminUsers.
     */
    data: XOR<AdminUserUpdateManyMutationInput, AdminUserUncheckedUpdateManyInput>
    /**
     * Filter which AdminUsers to update
     */
    where?: AdminUserWhereInput
    /**
     * Limit how many AdminUsers to update.
     */
    limit?: number
  }

  /**
   * AdminUser upsert
   */
  export type AdminUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The filter to search for the AdminUser to update in case it exists.
     */
    where: AdminUserWhereUniqueInput
    /**
     * In case the AdminUser found by the `where` argument doesn't exist, create a new AdminUser with this data.
     */
    create: XOR<AdminUserCreateInput, AdminUserUncheckedCreateInput>
    /**
     * In case the AdminUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUserUpdateInput, AdminUserUncheckedUpdateInput>
  }

  /**
   * AdminUser delete
   */
  export type AdminUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter which AdminUser to delete.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser deleteMany
   */
  export type AdminUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminUsers to delete
     */
    where?: AdminUserWhereInput
    /**
     * Limit how many AdminUsers to delete.
     */
    limit?: number
  }

  /**
   * AdminUser without action
   */
  export type AdminUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
  }


  /**
   * Model Pharmacy
   */

  export type AggregatePharmacy = {
    _count: PharmacyCountAggregateOutputType | null
    _min: PharmacyMinAggregateOutputType | null
    _max: PharmacyMaxAggregateOutputType | null
  }

  export type PharmacyMinAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    phone: string | null
    region: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PharmacyMaxAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    phone: string | null
    region: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PharmacyCountAggregateOutputType = {
    id: number
    name: number
    address: number
    phone: number
    region: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PharmacyMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    phone?: true
    region?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PharmacyMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    phone?: true
    region?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PharmacyCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    phone?: true
    region?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PharmacyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pharmacy to aggregate.
     */
    where?: PharmacyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pharmacies to fetch.
     */
    orderBy?: PharmacyOrderByWithRelationInput | PharmacyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PharmacyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pharmacies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pharmacies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pharmacies
    **/
    _count?: true | PharmacyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PharmacyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PharmacyMaxAggregateInputType
  }

  export type GetPharmacyAggregateType<T extends PharmacyAggregateArgs> = {
        [P in keyof T & keyof AggregatePharmacy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePharmacy[P]>
      : GetScalarType<T[P], AggregatePharmacy[P]>
  }




  export type PharmacyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PharmacyWhereInput
    orderBy?: PharmacyOrderByWithAggregationInput | PharmacyOrderByWithAggregationInput[]
    by: PharmacyScalarFieldEnum[] | PharmacyScalarFieldEnum
    having?: PharmacyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PharmacyCountAggregateInputType | true
    _min?: PharmacyMinAggregateInputType
    _max?: PharmacyMaxAggregateInputType
  }

  export type PharmacyGroupByOutputType = {
    id: string
    name: string
    address: string | null
    phone: string | null
    region: string | null
    status: string
    createdAt: Date
    updatedAt: Date
    _count: PharmacyCountAggregateOutputType | null
    _min: PharmacyMinAggregateOutputType | null
    _max: PharmacyMaxAggregateOutputType | null
  }

  type GetPharmacyGroupByPayload<T extends PharmacyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PharmacyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PharmacyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PharmacyGroupByOutputType[P]>
            : GetScalarType<T[P], PharmacyGroupByOutputType[P]>
        }
      >
    >


  export type PharmacySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    phone?: boolean
    region?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vendors?: boolean | Pharmacy$vendorsArgs<ExtArgs>
    _count?: boolean | PharmacyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pharmacy"]>



  export type PharmacySelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    phone?: boolean
    region?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PharmacyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "phone" | "region" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["pharmacy"]>
  export type PharmacyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendors?: boolean | Pharmacy$vendorsArgs<ExtArgs>
    _count?: boolean | PharmacyCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PharmacyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pharmacy"
    objects: {
      vendors: Prisma.$VendorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      address: string | null
      phone: string | null
      region: string | null
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["pharmacy"]>
    composites: {}
  }

  type PharmacyGetPayload<S extends boolean | null | undefined | PharmacyDefaultArgs> = $Result.GetResult<Prisma.$PharmacyPayload, S>

  type PharmacyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PharmacyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PharmacyCountAggregateInputType | true
    }

  export interface PharmacyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pharmacy'], meta: { name: 'Pharmacy' } }
    /**
     * Find zero or one Pharmacy that matches the filter.
     * @param {PharmacyFindUniqueArgs} args - Arguments to find a Pharmacy
     * @example
     * // Get one Pharmacy
     * const pharmacy = await prisma.pharmacy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PharmacyFindUniqueArgs>(args: SelectSubset<T, PharmacyFindUniqueArgs<ExtArgs>>): Prisma__PharmacyClient<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pharmacy that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PharmacyFindUniqueOrThrowArgs} args - Arguments to find a Pharmacy
     * @example
     * // Get one Pharmacy
     * const pharmacy = await prisma.pharmacy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PharmacyFindUniqueOrThrowArgs>(args: SelectSubset<T, PharmacyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PharmacyClient<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pharmacy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyFindFirstArgs} args - Arguments to find a Pharmacy
     * @example
     * // Get one Pharmacy
     * const pharmacy = await prisma.pharmacy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PharmacyFindFirstArgs>(args?: SelectSubset<T, PharmacyFindFirstArgs<ExtArgs>>): Prisma__PharmacyClient<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pharmacy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyFindFirstOrThrowArgs} args - Arguments to find a Pharmacy
     * @example
     * // Get one Pharmacy
     * const pharmacy = await prisma.pharmacy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PharmacyFindFirstOrThrowArgs>(args?: SelectSubset<T, PharmacyFindFirstOrThrowArgs<ExtArgs>>): Prisma__PharmacyClient<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pharmacies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pharmacies
     * const pharmacies = await prisma.pharmacy.findMany()
     * 
     * // Get first 10 Pharmacies
     * const pharmacies = await prisma.pharmacy.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pharmacyWithIdOnly = await prisma.pharmacy.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PharmacyFindManyArgs>(args?: SelectSubset<T, PharmacyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pharmacy.
     * @param {PharmacyCreateArgs} args - Arguments to create a Pharmacy.
     * @example
     * // Create one Pharmacy
     * const Pharmacy = await prisma.pharmacy.create({
     *   data: {
     *     // ... data to create a Pharmacy
     *   }
     * })
     * 
     */
    create<T extends PharmacyCreateArgs>(args: SelectSubset<T, PharmacyCreateArgs<ExtArgs>>): Prisma__PharmacyClient<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pharmacies.
     * @param {PharmacyCreateManyArgs} args - Arguments to create many Pharmacies.
     * @example
     * // Create many Pharmacies
     * const pharmacy = await prisma.pharmacy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PharmacyCreateManyArgs>(args?: SelectSubset<T, PharmacyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pharmacy.
     * @param {PharmacyDeleteArgs} args - Arguments to delete one Pharmacy.
     * @example
     * // Delete one Pharmacy
     * const Pharmacy = await prisma.pharmacy.delete({
     *   where: {
     *     // ... filter to delete one Pharmacy
     *   }
     * })
     * 
     */
    delete<T extends PharmacyDeleteArgs>(args: SelectSubset<T, PharmacyDeleteArgs<ExtArgs>>): Prisma__PharmacyClient<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pharmacy.
     * @param {PharmacyUpdateArgs} args - Arguments to update one Pharmacy.
     * @example
     * // Update one Pharmacy
     * const pharmacy = await prisma.pharmacy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PharmacyUpdateArgs>(args: SelectSubset<T, PharmacyUpdateArgs<ExtArgs>>): Prisma__PharmacyClient<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pharmacies.
     * @param {PharmacyDeleteManyArgs} args - Arguments to filter Pharmacies to delete.
     * @example
     * // Delete a few Pharmacies
     * const { count } = await prisma.pharmacy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PharmacyDeleteManyArgs>(args?: SelectSubset<T, PharmacyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pharmacies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pharmacies
     * const pharmacy = await prisma.pharmacy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PharmacyUpdateManyArgs>(args: SelectSubset<T, PharmacyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pharmacy.
     * @param {PharmacyUpsertArgs} args - Arguments to update or create a Pharmacy.
     * @example
     * // Update or create a Pharmacy
     * const pharmacy = await prisma.pharmacy.upsert({
     *   create: {
     *     // ... data to create a Pharmacy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pharmacy we want to update
     *   }
     * })
     */
    upsert<T extends PharmacyUpsertArgs>(args: SelectSubset<T, PharmacyUpsertArgs<ExtArgs>>): Prisma__PharmacyClient<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pharmacies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyCountArgs} args - Arguments to filter Pharmacies to count.
     * @example
     * // Count the number of Pharmacies
     * const count = await prisma.pharmacy.count({
     *   where: {
     *     // ... the filter for the Pharmacies we want to count
     *   }
     * })
    **/
    count<T extends PharmacyCountArgs>(
      args?: Subset<T, PharmacyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PharmacyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pharmacy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PharmacyAggregateArgs>(args: Subset<T, PharmacyAggregateArgs>): Prisma.PrismaPromise<GetPharmacyAggregateType<T>>

    /**
     * Group by Pharmacy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmacyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PharmacyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PharmacyGroupByArgs['orderBy'] }
        : { orderBy?: PharmacyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PharmacyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPharmacyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pharmacy model
   */
  readonly fields: PharmacyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pharmacy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PharmacyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vendors<T extends Pharmacy$vendorsArgs<ExtArgs> = {}>(args?: Subset<T, Pharmacy$vendorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pharmacy model
   */
  interface PharmacyFieldRefs {
    readonly id: FieldRef<"Pharmacy", 'String'>
    readonly name: FieldRef<"Pharmacy", 'String'>
    readonly address: FieldRef<"Pharmacy", 'String'>
    readonly phone: FieldRef<"Pharmacy", 'String'>
    readonly region: FieldRef<"Pharmacy", 'String'>
    readonly status: FieldRef<"Pharmacy", 'String'>
    readonly createdAt: FieldRef<"Pharmacy", 'DateTime'>
    readonly updatedAt: FieldRef<"Pharmacy", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pharmacy findUnique
   */
  export type PharmacyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInclude<ExtArgs> | null
    /**
     * Filter, which Pharmacy to fetch.
     */
    where: PharmacyWhereUniqueInput
  }

  /**
   * Pharmacy findUniqueOrThrow
   */
  export type PharmacyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInclude<ExtArgs> | null
    /**
     * Filter, which Pharmacy to fetch.
     */
    where: PharmacyWhereUniqueInput
  }

  /**
   * Pharmacy findFirst
   */
  export type PharmacyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInclude<ExtArgs> | null
    /**
     * Filter, which Pharmacy to fetch.
     */
    where?: PharmacyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pharmacies to fetch.
     */
    orderBy?: PharmacyOrderByWithRelationInput | PharmacyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pharmacies.
     */
    cursor?: PharmacyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pharmacies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pharmacies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pharmacies.
     */
    distinct?: PharmacyScalarFieldEnum | PharmacyScalarFieldEnum[]
  }

  /**
   * Pharmacy findFirstOrThrow
   */
  export type PharmacyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInclude<ExtArgs> | null
    /**
     * Filter, which Pharmacy to fetch.
     */
    where?: PharmacyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pharmacies to fetch.
     */
    orderBy?: PharmacyOrderByWithRelationInput | PharmacyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pharmacies.
     */
    cursor?: PharmacyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pharmacies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pharmacies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pharmacies.
     */
    distinct?: PharmacyScalarFieldEnum | PharmacyScalarFieldEnum[]
  }

  /**
   * Pharmacy findMany
   */
  export type PharmacyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInclude<ExtArgs> | null
    /**
     * Filter, which Pharmacies to fetch.
     */
    where?: PharmacyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pharmacies to fetch.
     */
    orderBy?: PharmacyOrderByWithRelationInput | PharmacyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pharmacies.
     */
    cursor?: PharmacyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pharmacies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pharmacies.
     */
    skip?: number
    distinct?: PharmacyScalarFieldEnum | PharmacyScalarFieldEnum[]
  }

  /**
   * Pharmacy create
   */
  export type PharmacyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInclude<ExtArgs> | null
    /**
     * The data needed to create a Pharmacy.
     */
    data: XOR<PharmacyCreateInput, PharmacyUncheckedCreateInput>
  }

  /**
   * Pharmacy createMany
   */
  export type PharmacyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pharmacies.
     */
    data: PharmacyCreateManyInput | PharmacyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pharmacy update
   */
  export type PharmacyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInclude<ExtArgs> | null
    /**
     * The data needed to update a Pharmacy.
     */
    data: XOR<PharmacyUpdateInput, PharmacyUncheckedUpdateInput>
    /**
     * Choose, which Pharmacy to update.
     */
    where: PharmacyWhereUniqueInput
  }

  /**
   * Pharmacy updateMany
   */
  export type PharmacyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pharmacies.
     */
    data: XOR<PharmacyUpdateManyMutationInput, PharmacyUncheckedUpdateManyInput>
    /**
     * Filter which Pharmacies to update
     */
    where?: PharmacyWhereInput
    /**
     * Limit how many Pharmacies to update.
     */
    limit?: number
  }

  /**
   * Pharmacy upsert
   */
  export type PharmacyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInclude<ExtArgs> | null
    /**
     * The filter to search for the Pharmacy to update in case it exists.
     */
    where: PharmacyWhereUniqueInput
    /**
     * In case the Pharmacy found by the `where` argument doesn't exist, create a new Pharmacy with this data.
     */
    create: XOR<PharmacyCreateInput, PharmacyUncheckedCreateInput>
    /**
     * In case the Pharmacy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PharmacyUpdateInput, PharmacyUncheckedUpdateInput>
  }

  /**
   * Pharmacy delete
   */
  export type PharmacyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInclude<ExtArgs> | null
    /**
     * Filter which Pharmacy to delete.
     */
    where: PharmacyWhereUniqueInput
  }

  /**
   * Pharmacy deleteMany
   */
  export type PharmacyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pharmacies to delete
     */
    where?: PharmacyWhereInput
    /**
     * Limit how many Pharmacies to delete.
     */
    limit?: number
  }

  /**
   * Pharmacy.vendors
   */
  export type Pharmacy$vendorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    where?: VendorWhereInput
    orderBy?: VendorOrderByWithRelationInput | VendorOrderByWithRelationInput[]
    cursor?: VendorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VendorScalarFieldEnum | VendorScalarFieldEnum[]
  }

  /**
   * Pharmacy without action
   */
  export type PharmacyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInclude<ExtArgs> | null
  }


  /**
   * Model Vendor
   */

  export type AggregateVendor = {
    _count: VendorCountAggregateOutputType | null
    _min: VendorMinAggregateOutputType | null
    _max: VendorMaxAggregateOutputType | null
  }

  export type VendorMinAggregateOutputType = {
    id: string | null
    uniqueCardNumber: string | null
    name: string | null
    email: string | null
    phone: string | null
    ccp: string | null
    ccpKey: string | null
    rip: string | null
    pharmacyId: string | null
    status: string | null
    actionDate: Date | null
    registrationBonus: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VendorMaxAggregateOutputType = {
    id: string | null
    uniqueCardNumber: string | null
    name: string | null
    email: string | null
    phone: string | null
    ccp: string | null
    ccpKey: string | null
    rip: string | null
    pharmacyId: string | null
    status: string | null
    actionDate: Date | null
    registrationBonus: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VendorCountAggregateOutputType = {
    id: number
    uniqueCardNumber: number
    name: number
    email: number
    phone: number
    ccp: number
    ccpKey: number
    rip: number
    pharmacyId: number
    status: number
    actionDate: number
    registrationBonus: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VendorMinAggregateInputType = {
    id?: true
    uniqueCardNumber?: true
    name?: true
    email?: true
    phone?: true
    ccp?: true
    ccpKey?: true
    rip?: true
    pharmacyId?: true
    status?: true
    actionDate?: true
    registrationBonus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VendorMaxAggregateInputType = {
    id?: true
    uniqueCardNumber?: true
    name?: true
    email?: true
    phone?: true
    ccp?: true
    ccpKey?: true
    rip?: true
    pharmacyId?: true
    status?: true
    actionDate?: true
    registrationBonus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VendorCountAggregateInputType = {
    id?: true
    uniqueCardNumber?: true
    name?: true
    email?: true
    phone?: true
    ccp?: true
    ccpKey?: true
    rip?: true
    pharmacyId?: true
    status?: true
    actionDate?: true
    registrationBonus?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VendorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vendor to aggregate.
     */
    where?: VendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendors to fetch.
     */
    orderBy?: VendorOrderByWithRelationInput | VendorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vendors
    **/
    _count?: true | VendorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VendorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VendorMaxAggregateInputType
  }

  export type GetVendorAggregateType<T extends VendorAggregateArgs> = {
        [P in keyof T & keyof AggregateVendor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVendor[P]>
      : GetScalarType<T[P], AggregateVendor[P]>
  }




  export type VendorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VendorWhereInput
    orderBy?: VendorOrderByWithAggregationInput | VendorOrderByWithAggregationInput[]
    by: VendorScalarFieldEnum[] | VendorScalarFieldEnum
    having?: VendorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VendorCountAggregateInputType | true
    _min?: VendorMinAggregateInputType
    _max?: VendorMaxAggregateInputType
  }

  export type VendorGroupByOutputType = {
    id: string
    uniqueCardNumber: string
    name: string | null
    email: string | null
    phone: string | null
    ccp: string | null
    ccpKey: string | null
    rip: string | null
    pharmacyId: string | null
    status: string
    actionDate: Date
    registrationBonus: boolean
    createdAt: Date
    updatedAt: Date
    _count: VendorCountAggregateOutputType | null
    _min: VendorMinAggregateOutputType | null
    _max: VendorMaxAggregateOutputType | null
  }

  type GetVendorGroupByPayload<T extends VendorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VendorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VendorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VendorGroupByOutputType[P]>
            : GetScalarType<T[P], VendorGroupByOutputType[P]>
        }
      >
    >


  export type VendorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uniqueCardNumber?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    ccp?: boolean
    ccpKey?: boolean
    rip?: boolean
    pharmacyId?: boolean
    status?: boolean
    actionDate?: boolean
    registrationBonus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pharmacy?: boolean | Vendor$pharmacyArgs<ExtArgs>
    sales?: boolean | Vendor$salesArgs<ExtArgs>
    paymentPeriods?: boolean | Vendor$paymentPeriodsArgs<ExtArgs>
    qrCodes?: boolean | Vendor$qrCodesArgs<ExtArgs>
    notifications?: boolean | Vendor$notificationsArgs<ExtArgs>
    _count?: boolean | VendorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vendor"]>



  export type VendorSelectScalar = {
    id?: boolean
    uniqueCardNumber?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    ccp?: boolean
    ccpKey?: boolean
    rip?: boolean
    pharmacyId?: boolean
    status?: boolean
    actionDate?: boolean
    registrationBonus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VendorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uniqueCardNumber" | "name" | "email" | "phone" | "ccp" | "ccpKey" | "rip" | "pharmacyId" | "status" | "actionDate" | "registrationBonus" | "createdAt" | "updatedAt", ExtArgs["result"]["vendor"]>
  export type VendorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pharmacy?: boolean | Vendor$pharmacyArgs<ExtArgs>
    sales?: boolean | Vendor$salesArgs<ExtArgs>
    paymentPeriods?: boolean | Vendor$paymentPeriodsArgs<ExtArgs>
    qrCodes?: boolean | Vendor$qrCodesArgs<ExtArgs>
    notifications?: boolean | Vendor$notificationsArgs<ExtArgs>
    _count?: boolean | VendorCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $VendorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vendor"
    objects: {
      pharmacy: Prisma.$PharmacyPayload<ExtArgs> | null
      sales: Prisma.$SalePayload<ExtArgs>[]
      paymentPeriods: Prisma.$PaymentPeriodPayload<ExtArgs>[]
      qrCodes: Prisma.$QrCodePayload<ExtArgs>[]
      notifications: Prisma.$VendorNotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      uniqueCardNumber: string
      name: string | null
      email: string | null
      phone: string | null
      ccp: string | null
      ccpKey: string | null
      rip: string | null
      pharmacyId: string | null
      status: string
      actionDate: Date
      registrationBonus: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["vendor"]>
    composites: {}
  }

  type VendorGetPayload<S extends boolean | null | undefined | VendorDefaultArgs> = $Result.GetResult<Prisma.$VendorPayload, S>

  type VendorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VendorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VendorCountAggregateInputType | true
    }

  export interface VendorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vendor'], meta: { name: 'Vendor' } }
    /**
     * Find zero or one Vendor that matches the filter.
     * @param {VendorFindUniqueArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VendorFindUniqueArgs>(args: SelectSubset<T, VendorFindUniqueArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vendor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VendorFindUniqueOrThrowArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VendorFindUniqueOrThrowArgs>(args: SelectSubset<T, VendorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vendor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorFindFirstArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VendorFindFirstArgs>(args?: SelectSubset<T, VendorFindFirstArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vendor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorFindFirstOrThrowArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VendorFindFirstOrThrowArgs>(args?: SelectSubset<T, VendorFindFirstOrThrowArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vendors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vendors
     * const vendors = await prisma.vendor.findMany()
     * 
     * // Get first 10 Vendors
     * const vendors = await prisma.vendor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vendorWithIdOnly = await prisma.vendor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VendorFindManyArgs>(args?: SelectSubset<T, VendorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vendor.
     * @param {VendorCreateArgs} args - Arguments to create a Vendor.
     * @example
     * // Create one Vendor
     * const Vendor = await prisma.vendor.create({
     *   data: {
     *     // ... data to create a Vendor
     *   }
     * })
     * 
     */
    create<T extends VendorCreateArgs>(args: SelectSubset<T, VendorCreateArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vendors.
     * @param {VendorCreateManyArgs} args - Arguments to create many Vendors.
     * @example
     * // Create many Vendors
     * const vendor = await prisma.vendor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VendorCreateManyArgs>(args?: SelectSubset<T, VendorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Vendor.
     * @param {VendorDeleteArgs} args - Arguments to delete one Vendor.
     * @example
     * // Delete one Vendor
     * const Vendor = await prisma.vendor.delete({
     *   where: {
     *     // ... filter to delete one Vendor
     *   }
     * })
     * 
     */
    delete<T extends VendorDeleteArgs>(args: SelectSubset<T, VendorDeleteArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vendor.
     * @param {VendorUpdateArgs} args - Arguments to update one Vendor.
     * @example
     * // Update one Vendor
     * const vendor = await prisma.vendor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VendorUpdateArgs>(args: SelectSubset<T, VendorUpdateArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vendors.
     * @param {VendorDeleteManyArgs} args - Arguments to filter Vendors to delete.
     * @example
     * // Delete a few Vendors
     * const { count } = await prisma.vendor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VendorDeleteManyArgs>(args?: SelectSubset<T, VendorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vendors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vendors
     * const vendor = await prisma.vendor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VendorUpdateManyArgs>(args: SelectSubset<T, VendorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Vendor.
     * @param {VendorUpsertArgs} args - Arguments to update or create a Vendor.
     * @example
     * // Update or create a Vendor
     * const vendor = await prisma.vendor.upsert({
     *   create: {
     *     // ... data to create a Vendor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vendor we want to update
     *   }
     * })
     */
    upsert<T extends VendorUpsertArgs>(args: SelectSubset<T, VendorUpsertArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vendors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorCountArgs} args - Arguments to filter Vendors to count.
     * @example
     * // Count the number of Vendors
     * const count = await prisma.vendor.count({
     *   where: {
     *     // ... the filter for the Vendors we want to count
     *   }
     * })
    **/
    count<T extends VendorCountArgs>(
      args?: Subset<T, VendorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VendorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vendor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VendorAggregateArgs>(args: Subset<T, VendorAggregateArgs>): Prisma.PrismaPromise<GetVendorAggregateType<T>>

    /**
     * Group by Vendor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VendorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VendorGroupByArgs['orderBy'] }
        : { orderBy?: VendorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VendorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVendorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vendor model
   */
  readonly fields: VendorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vendor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VendorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pharmacy<T extends Vendor$pharmacyArgs<ExtArgs> = {}>(args?: Subset<T, Vendor$pharmacyArgs<ExtArgs>>): Prisma__PharmacyClient<$Result.GetResult<Prisma.$PharmacyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sales<T extends Vendor$salesArgs<ExtArgs> = {}>(args?: Subset<T, Vendor$salesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    paymentPeriods<T extends Vendor$paymentPeriodsArgs<ExtArgs> = {}>(args?: Subset<T, Vendor$paymentPeriodsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPeriodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    qrCodes<T extends Vendor$qrCodesArgs<ExtArgs> = {}>(args?: Subset<T, Vendor$qrCodesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QrCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends Vendor$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, Vendor$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendorNotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vendor model
   */
  interface VendorFieldRefs {
    readonly id: FieldRef<"Vendor", 'String'>
    readonly uniqueCardNumber: FieldRef<"Vendor", 'String'>
    readonly name: FieldRef<"Vendor", 'String'>
    readonly email: FieldRef<"Vendor", 'String'>
    readonly phone: FieldRef<"Vendor", 'String'>
    readonly ccp: FieldRef<"Vendor", 'String'>
    readonly ccpKey: FieldRef<"Vendor", 'String'>
    readonly rip: FieldRef<"Vendor", 'String'>
    readonly pharmacyId: FieldRef<"Vendor", 'String'>
    readonly status: FieldRef<"Vendor", 'String'>
    readonly actionDate: FieldRef<"Vendor", 'DateTime'>
    readonly registrationBonus: FieldRef<"Vendor", 'Boolean'>
    readonly createdAt: FieldRef<"Vendor", 'DateTime'>
    readonly updatedAt: FieldRef<"Vendor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Vendor findUnique
   */
  export type VendorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter, which Vendor to fetch.
     */
    where: VendorWhereUniqueInput
  }

  /**
   * Vendor findUniqueOrThrow
   */
  export type VendorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter, which Vendor to fetch.
     */
    where: VendorWhereUniqueInput
  }

  /**
   * Vendor findFirst
   */
  export type VendorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter, which Vendor to fetch.
     */
    where?: VendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendors to fetch.
     */
    orderBy?: VendorOrderByWithRelationInput | VendorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vendors.
     */
    cursor?: VendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vendors.
     */
    distinct?: VendorScalarFieldEnum | VendorScalarFieldEnum[]
  }

  /**
   * Vendor findFirstOrThrow
   */
  export type VendorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter, which Vendor to fetch.
     */
    where?: VendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendors to fetch.
     */
    orderBy?: VendorOrderByWithRelationInput | VendorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vendors.
     */
    cursor?: VendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vendors.
     */
    distinct?: VendorScalarFieldEnum | VendorScalarFieldEnum[]
  }

  /**
   * Vendor findMany
   */
  export type VendorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter, which Vendors to fetch.
     */
    where?: VendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendors to fetch.
     */
    orderBy?: VendorOrderByWithRelationInput | VendorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vendors.
     */
    cursor?: VendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendors.
     */
    skip?: number
    distinct?: VendorScalarFieldEnum | VendorScalarFieldEnum[]
  }

  /**
   * Vendor create
   */
  export type VendorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * The data needed to create a Vendor.
     */
    data: XOR<VendorCreateInput, VendorUncheckedCreateInput>
  }

  /**
   * Vendor createMany
   */
  export type VendorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vendors.
     */
    data: VendorCreateManyInput | VendorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vendor update
   */
  export type VendorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * The data needed to update a Vendor.
     */
    data: XOR<VendorUpdateInput, VendorUncheckedUpdateInput>
    /**
     * Choose, which Vendor to update.
     */
    where: VendorWhereUniqueInput
  }

  /**
   * Vendor updateMany
   */
  export type VendorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vendors.
     */
    data: XOR<VendorUpdateManyMutationInput, VendorUncheckedUpdateManyInput>
    /**
     * Filter which Vendors to update
     */
    where?: VendorWhereInput
    /**
     * Limit how many Vendors to update.
     */
    limit?: number
  }

  /**
   * Vendor upsert
   */
  export type VendorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * The filter to search for the Vendor to update in case it exists.
     */
    where: VendorWhereUniqueInput
    /**
     * In case the Vendor found by the `where` argument doesn't exist, create a new Vendor with this data.
     */
    create: XOR<VendorCreateInput, VendorUncheckedCreateInput>
    /**
     * In case the Vendor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VendorUpdateInput, VendorUncheckedUpdateInput>
  }

  /**
   * Vendor delete
   */
  export type VendorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter which Vendor to delete.
     */
    where: VendorWhereUniqueInput
  }

  /**
   * Vendor deleteMany
   */
  export type VendorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vendors to delete
     */
    where?: VendorWhereInput
    /**
     * Limit how many Vendors to delete.
     */
    limit?: number
  }

  /**
   * Vendor.pharmacy
   */
  export type Vendor$pharmacyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pharmacy
     */
    select?: PharmacySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pharmacy
     */
    omit?: PharmacyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmacyInclude<ExtArgs> | null
    where?: PharmacyWhereInput
  }

  /**
   * Vendor.sales
   */
  export type Vendor$salesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    where?: SaleWhereInput
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    cursor?: SaleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Vendor.paymentPeriods
   */
  export type Vendor$paymentPeriodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPeriod
     */
    select?: PaymentPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPeriod
     */
    omit?: PaymentPeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentPeriodInclude<ExtArgs> | null
    where?: PaymentPeriodWhereInput
    orderBy?: PaymentPeriodOrderByWithRelationInput | PaymentPeriodOrderByWithRelationInput[]
    cursor?: PaymentPeriodWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentPeriodScalarFieldEnum | PaymentPeriodScalarFieldEnum[]
  }

  /**
   * Vendor.qrCodes
   */
  export type Vendor$qrCodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QrCode
     */
    select?: QrCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QrCode
     */
    omit?: QrCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QrCodeInclude<ExtArgs> | null
    where?: QrCodeWhereInput
    orderBy?: QrCodeOrderByWithRelationInput | QrCodeOrderByWithRelationInput[]
    cursor?: QrCodeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QrCodeScalarFieldEnum | QrCodeScalarFieldEnum[]
  }

  /**
   * Vendor.notifications
   */
  export type Vendor$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorNotification
     */
    select?: VendorNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorNotification
     */
    omit?: VendorNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorNotificationInclude<ExtArgs> | null
    where?: VendorNotificationWhereInput
    orderBy?: VendorNotificationOrderByWithRelationInput | VendorNotificationOrderByWithRelationInput[]
    cursor?: VendorNotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VendorNotificationScalarFieldEnum | VendorNotificationScalarFieldEnum[]
  }

  /**
   * Vendor without action
   */
  export type VendorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
  }


  /**
   * Model Delegue
   */

  export type AggregateDelegue = {
    _count: DelegueCountAggregateOutputType | null
    _min: DelegueMinAggregateOutputType | null
    _max: DelegueMaxAggregateOutputType | null
  }

  export type DelegueMinAggregateOutputType = {
    id: string | null
    uniqueCardNumber: string | null
    name: string | null
    email: string | null
    phone: string | null
    sector: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DelegueMaxAggregateOutputType = {
    id: string | null
    uniqueCardNumber: string | null
    name: string | null
    email: string | null
    phone: string | null
    sector: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DelegueCountAggregateOutputType = {
    id: number
    uniqueCardNumber: number
    name: number
    email: number
    phone: number
    region: number
    sector: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DelegueMinAggregateInputType = {
    id?: true
    uniqueCardNumber?: true
    name?: true
    email?: true
    phone?: true
    sector?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DelegueMaxAggregateInputType = {
    id?: true
    uniqueCardNumber?: true
    name?: true
    email?: true
    phone?: true
    sector?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DelegueCountAggregateInputType = {
    id?: true
    uniqueCardNumber?: true
    name?: true
    email?: true
    phone?: true
    region?: true
    sector?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DelegueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Delegue to aggregate.
     */
    where?: DelegueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Delegues to fetch.
     */
    orderBy?: DelegueOrderByWithRelationInput | DelegueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DelegueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Delegues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Delegues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Delegues
    **/
    _count?: true | DelegueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DelegueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DelegueMaxAggregateInputType
  }

  export type GetDelegueAggregateType<T extends DelegueAggregateArgs> = {
        [P in keyof T & keyof AggregateDelegue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDelegue[P]>
      : GetScalarType<T[P], AggregateDelegue[P]>
  }




  export type DelegueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DelegueWhereInput
    orderBy?: DelegueOrderByWithAggregationInput | DelegueOrderByWithAggregationInput[]
    by: DelegueScalarFieldEnum[] | DelegueScalarFieldEnum
    having?: DelegueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DelegueCountAggregateInputType | true
    _min?: DelegueMinAggregateInputType
    _max?: DelegueMaxAggregateInputType
  }

  export type DelegueGroupByOutputType = {
    id: string
    uniqueCardNumber: string
    name: string
    email: string | null
    phone: string | null
    region: JsonValue
    sector: string | null
    status: string
    createdAt: Date
    updatedAt: Date
    _count: DelegueCountAggregateOutputType | null
    _min: DelegueMinAggregateOutputType | null
    _max: DelegueMaxAggregateOutputType | null
  }

  type GetDelegueGroupByPayload<T extends DelegueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DelegueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DelegueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DelegueGroupByOutputType[P]>
            : GetScalarType<T[P], DelegueGroupByOutputType[P]>
        }
      >
    >


  export type DelegueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uniqueCardNumber?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    region?: boolean
    sector?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    qrCodes?: boolean | Delegue$qrCodesArgs<ExtArgs>
    notifications?: boolean | Delegue$notificationsArgs<ExtArgs>
    _count?: boolean | DelegueCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["delegue"]>



  export type DelegueSelectScalar = {
    id?: boolean
    uniqueCardNumber?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    region?: boolean
    sector?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DelegueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uniqueCardNumber" | "name" | "email" | "phone" | "region" | "sector" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["delegue"]>
  export type DelegueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    qrCodes?: boolean | Delegue$qrCodesArgs<ExtArgs>
    notifications?: boolean | Delegue$notificationsArgs<ExtArgs>
    _count?: boolean | DelegueCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DeleguePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Delegue"
    objects: {
      qrCodes: Prisma.$DelegueQrCodePayload<ExtArgs>[]
      notifications: Prisma.$DelegueNotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      uniqueCardNumber: string
      name: string
      email: string | null
      phone: string | null
      region: Prisma.JsonValue
      sector: string | null
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["delegue"]>
    composites: {}
  }

  type DelegueGetPayload<S extends boolean | null | undefined | DelegueDefaultArgs> = $Result.GetResult<Prisma.$DeleguePayload, S>

  type DelegueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DelegueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DelegueCountAggregateInputType | true
    }

  export interface DelegueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Delegue'], meta: { name: 'Delegue' } }
    /**
     * Find zero or one Delegue that matches the filter.
     * @param {DelegueFindUniqueArgs} args - Arguments to find a Delegue
     * @example
     * // Get one Delegue
     * const delegue = await prisma.delegue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DelegueFindUniqueArgs>(args: SelectSubset<T, DelegueFindUniqueArgs<ExtArgs>>): Prisma__DelegueClient<$Result.GetResult<Prisma.$DeleguePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Delegue that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DelegueFindUniqueOrThrowArgs} args - Arguments to find a Delegue
     * @example
     * // Get one Delegue
     * const delegue = await prisma.delegue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DelegueFindUniqueOrThrowArgs>(args: SelectSubset<T, DelegueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DelegueClient<$Result.GetResult<Prisma.$DeleguePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Delegue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DelegueFindFirstArgs} args - Arguments to find a Delegue
     * @example
     * // Get one Delegue
     * const delegue = await prisma.delegue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DelegueFindFirstArgs>(args?: SelectSubset<T, DelegueFindFirstArgs<ExtArgs>>): Prisma__DelegueClient<$Result.GetResult<Prisma.$DeleguePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Delegue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DelegueFindFirstOrThrowArgs} args - Arguments to find a Delegue
     * @example
     * // Get one Delegue
     * const delegue = await prisma.delegue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DelegueFindFirstOrThrowArgs>(args?: SelectSubset<T, DelegueFindFirstOrThrowArgs<ExtArgs>>): Prisma__DelegueClient<$Result.GetResult<Prisma.$DeleguePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Delegues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DelegueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Delegues
     * const delegues = await prisma.delegue.findMany()
     * 
     * // Get first 10 Delegues
     * const delegues = await prisma.delegue.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const delegueWithIdOnly = await prisma.delegue.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DelegueFindManyArgs>(args?: SelectSubset<T, DelegueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeleguePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Delegue.
     * @param {DelegueCreateArgs} args - Arguments to create a Delegue.
     * @example
     * // Create one Delegue
     * const Delegue = await prisma.delegue.create({
     *   data: {
     *     // ... data to create a Delegue
     *   }
     * })
     * 
     */
    create<T extends DelegueCreateArgs>(args: SelectSubset<T, DelegueCreateArgs<ExtArgs>>): Prisma__DelegueClient<$Result.GetResult<Prisma.$DeleguePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Delegues.
     * @param {DelegueCreateManyArgs} args - Arguments to create many Delegues.
     * @example
     * // Create many Delegues
     * const delegue = await prisma.delegue.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DelegueCreateManyArgs>(args?: SelectSubset<T, DelegueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Delegue.
     * @param {DelegueDeleteArgs} args - Arguments to delete one Delegue.
     * @example
     * // Delete one Delegue
     * const Delegue = await prisma.delegue.delete({
     *   where: {
     *     // ... filter to delete one Delegue
     *   }
     * })
     * 
     */
    delete<T extends DelegueDeleteArgs>(args: SelectSubset<T, DelegueDeleteArgs<ExtArgs>>): Prisma__DelegueClient<$Result.GetResult<Prisma.$DeleguePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Delegue.
     * @param {DelegueUpdateArgs} args - Arguments to update one Delegue.
     * @example
     * // Update one Delegue
     * const delegue = await prisma.delegue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DelegueUpdateArgs>(args: SelectSubset<T, DelegueUpdateArgs<ExtArgs>>): Prisma__DelegueClient<$Result.GetResult<Prisma.$DeleguePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Delegues.
     * @param {DelegueDeleteManyArgs} args - Arguments to filter Delegues to delete.
     * @example
     * // Delete a few Delegues
     * const { count } = await prisma.delegue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DelegueDeleteManyArgs>(args?: SelectSubset<T, DelegueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Delegues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DelegueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Delegues
     * const delegue = await prisma.delegue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DelegueUpdateManyArgs>(args: SelectSubset<T, DelegueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Delegue.
     * @param {DelegueUpsertArgs} args - Arguments to update or create a Delegue.
     * @example
     * // Update or create a Delegue
     * const delegue = await prisma.delegue.upsert({
     *   create: {
     *     // ... data to create a Delegue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Delegue we want to update
     *   }
     * })
     */
    upsert<T extends DelegueUpsertArgs>(args: SelectSubset<T, DelegueUpsertArgs<ExtArgs>>): Prisma__DelegueClient<$Result.GetResult<Prisma.$DeleguePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Delegues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DelegueCountArgs} args - Arguments to filter Delegues to count.
     * @example
     * // Count the number of Delegues
     * const count = await prisma.delegue.count({
     *   where: {
     *     // ... the filter for the Delegues we want to count
     *   }
     * })
    **/
    count<T extends DelegueCountArgs>(
      args?: Subset<T, DelegueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DelegueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Delegue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DelegueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DelegueAggregateArgs>(args: Subset<T, DelegueAggregateArgs>): Prisma.PrismaPromise<GetDelegueAggregateType<T>>

    /**
     * Group by Delegue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DelegueGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DelegueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DelegueGroupByArgs['orderBy'] }
        : { orderBy?: DelegueGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DelegueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDelegueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Delegue model
   */
  readonly fields: DelegueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Delegue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DelegueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    qrCodes<T extends Delegue$qrCodesArgs<ExtArgs> = {}>(args?: Subset<T, Delegue$qrCodesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DelegueQrCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends Delegue$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, Delegue$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DelegueNotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Delegue model
   */
  interface DelegueFieldRefs {
    readonly id: FieldRef<"Delegue", 'String'>
    readonly uniqueCardNumber: FieldRef<"Delegue", 'String'>
    readonly name: FieldRef<"Delegue", 'String'>
    readonly email: FieldRef<"Delegue", 'String'>
    readonly phone: FieldRef<"Delegue", 'String'>
    readonly region: FieldRef<"Delegue", 'Json'>
    readonly sector: FieldRef<"Delegue", 'String'>
    readonly status: FieldRef<"Delegue", 'String'>
    readonly createdAt: FieldRef<"Delegue", 'DateTime'>
    readonly updatedAt: FieldRef<"Delegue", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Delegue findUnique
   */
  export type DelegueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delegue
     */
    select?: DelegueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delegue
     */
    omit?: DelegueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DelegueInclude<ExtArgs> | null
    /**
     * Filter, which Delegue to fetch.
     */
    where: DelegueWhereUniqueInput
  }

  /**
   * Delegue findUniqueOrThrow
   */
  export type DelegueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delegue
     */
    select?: DelegueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delegue
     */
    omit?: DelegueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DelegueInclude<ExtArgs> | null
    /**
     * Filter, which Delegue to fetch.
     */
    where: DelegueWhereUniqueInput
  }

  /**
   * Delegue findFirst
   */
  export type DelegueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delegue
     */
    select?: DelegueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delegue
     */
    omit?: DelegueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DelegueInclude<ExtArgs> | null
    /**
     * Filter, which Delegue to fetch.
     */
    where?: DelegueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Delegues to fetch.
     */
    orderBy?: DelegueOrderByWithRelationInput | DelegueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Delegues.
     */
    cursor?: DelegueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Delegues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Delegues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Delegues.
     */
    distinct?: DelegueScalarFieldEnum | DelegueScalarFieldEnum[]
  }

  /**
   * Delegue findFirstOrThrow
   */
  export type DelegueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delegue
     */
    select?: DelegueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delegue
     */
    omit?: DelegueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DelegueInclude<ExtArgs> | null
    /**
     * Filter, which Delegue to fetch.
     */
    where?: DelegueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Delegues to fetch.
     */
    orderBy?: DelegueOrderByWithRelationInput | DelegueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Delegues.
     */
    cursor?: DelegueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Delegues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Delegues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Delegues.
     */
    distinct?: DelegueScalarFieldEnum | DelegueScalarFieldEnum[]
  }

  /**
   * Delegue findMany
   */
  export type DelegueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delegue
     */
    select?: DelegueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delegue
     */
    omit?: DelegueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DelegueInclude<ExtArgs> | null
    /**
     * Filter, which Delegues to fetch.
     */
    where?: DelegueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Delegues to fetch.
     */
    orderBy?: DelegueOrderByWithRelationInput | DelegueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Delegues.
     */
    cursor?: DelegueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Delegues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Delegues.
     */
    skip?: number
    distinct?: DelegueScalarFieldEnum | DelegueScalarFieldEnum[]
  }

  /**
   * Delegue create
   */
  export type DelegueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delegue
     */
    select?: DelegueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delegue
     */
    omit?: DelegueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DelegueInclude<ExtArgs> | null
    /**
     * The data needed to create a Delegue.
     */
    data: XOR<DelegueCreateInput, DelegueUncheckedCreateInput>
  }

  /**
   * Delegue createMany
   */
  export type DelegueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Delegues.
     */
    data: DelegueCreateManyInput | DelegueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Delegue update
   */
  export type DelegueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delegue
     */
    select?: DelegueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delegue
     */
    omit?: DelegueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DelegueInclude<ExtArgs> | null
    /**
     * The data needed to update a Delegue.
     */
    data: XOR<DelegueUpdateInput, DelegueUncheckedUpdateInput>
    /**
     * Choose, which Delegue to update.
     */
    where: DelegueWhereUniqueInput
  }

  /**
   * Delegue updateMany
   */
  export type DelegueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Delegues.
     */
    data: XOR<DelegueUpdateManyMutationInput, DelegueUncheckedUpdateManyInput>
    /**
     * Filter which Delegues to update
     */
    where?: DelegueWhereInput
    /**
     * Limit how many Delegues to update.
     */
    limit?: number
  }

  /**
   * Delegue upsert
   */
  export type DelegueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delegue
     */
    select?: DelegueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delegue
     */
    omit?: DelegueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DelegueInclude<ExtArgs> | null
    /**
     * The filter to search for the Delegue to update in case it exists.
     */
    where: DelegueWhereUniqueInput
    /**
     * In case the Delegue found by the `where` argument doesn't exist, create a new Delegue with this data.
     */
    create: XOR<DelegueCreateInput, DelegueUncheckedCreateInput>
    /**
     * In case the Delegue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DelegueUpdateInput, DelegueUncheckedUpdateInput>
  }

  /**
   * Delegue delete
   */
  export type DelegueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delegue
     */
    select?: DelegueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delegue
     */
    omit?: DelegueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DelegueInclude<ExtArgs> | null
    /**
     * Filter which Delegue to delete.
     */
    where: DelegueWhereUniqueInput
  }

  /**
   * Delegue deleteMany
   */
  export type DelegueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Delegues to delete
     */
    where?: DelegueWhereInput
    /**
     * Limit how many Delegues to delete.
     */
    limit?: number
  }

  /**
   * Delegue.qrCodes
   */
  export type Delegue$qrCodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DelegueQrCode
     */
    select?: DelegueQrCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DelegueQrCode
     */
    omit?: DelegueQrCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DelegueQrCodeInclude<ExtArgs> | null
    where?: DelegueQrCodeWhereInput
    orderBy?: DelegueQrCodeOrderByWithRelationInput | DelegueQrCodeOrderByWithRelationInput[]
    cursor?: DelegueQrCodeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DelegueQrCodeScalarFieldEnum | DelegueQrCodeScalarFieldEnum[]
  }

  /**
   * Delegue.notifications
   */
  export type Delegue$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DelegueNotification
     */
    select?: DelegueNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DelegueNotification
     */
    omit?: DelegueNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DelegueNotificationInclude<ExtArgs> | null
    where?: DelegueNotificationWhereInput
    orderBy?: DelegueNotificationOrderByWithRelationInput | DelegueNotificationOrderByWithRelationInput[]
    cursor?: DelegueNotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DelegueNotificationScalarFieldEnum | DelegueNotificationScalarFieldEnum[]
  }

  /**
   * Delegue without action
   */
  export type DelegueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delegue
     */
    select?: DelegueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delegue
     */
    omit?: DelegueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DelegueInclude<ExtArgs> | null
  }


  /**
   * Model DelegueQrCode
   */

  export type AggregateDelegueQrCode = {
    _count: DelegueQrCodeCountAggregateOutputType | null
    _min: DelegueQrCodeMinAggregateOutputType | null
    _max: DelegueQrCodeMaxAggregateOutputType | null
  }

  export type DelegueQrCodeMinAggregateOutputType = {
    id: string | null
    delegueId: string | null
    uniqueKey: string | null
    qrUrl: string | null
    qrImageData: string | null
    generatedAt: Date | null
    isActive: boolean | null
  }

  export type DelegueQrCodeMaxAggregateOutputType = {
    id: string | null
    delegueId: string | null
    uniqueKey: string | null
    qrUrl: string | null
    qrImageData: string | null
    generatedAt: Date | null
    isActive: boolean | null
  }

  export type DelegueQrCodeCountAggregateOutputType = {
    id: number
    delegueId: number
    uniqueKey: number
    qrUrl: number
    qrImageData: number
    generatedAt: number
    isActive: number
    _all: number
  }


  export type DelegueQrCodeMinAggregateInputType = {
    id?: true
    delegueId?: true
    uniqueKey?: true
    qrUrl?: true
    qrImageData?: true
    generatedAt?: true
    isActive?: true
  }

  export type DelegueQrCodeMaxAggregateInputType = {
    id?: true
    delegueId?: true
    uniqueKey?: true
    qrUrl?: true
    qrImageData?: true
    generatedAt?: true
    isActive?: true
  }

  export type DelegueQrCodeCountAggregateInputType = {
    id?: true
    delegueId?: true
    uniqueKey?: true
    qrUrl?: true
    qrImageData?: true
    generatedAt?: true
    isActive?: true
    _all?: true
  }

  export type DelegueQrCodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DelegueQrCode to aggregate.
     */
    where?: DelegueQrCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DelegueQrCodes to fetch.
     */
    orderBy?: DelegueQrCodeOrderByWithRelationInput | DelegueQrCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DelegueQrCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DelegueQrCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DelegueQrCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DelegueQrCodes
    **/
    _count?: true | DelegueQrCodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DelegueQrCodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DelegueQrCodeMaxAggregateInputType
  }

  export type GetDelegueQrCodeAggregateType<T extends DelegueQrCodeAggregateArgs> = {
        [P in keyof T & keyof AggregateDelegueQrCode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDelegueQrCode[P]>
      : GetScalarType<T[P], AggregateDelegueQrCode[P]>
  }




  export type DelegueQrCodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DelegueQrCodeWhereInput
    orderBy?: DelegueQrCodeOrderByWithAggregationInput | DelegueQrCodeOrderByWithAggregationInput[]
    by: DelegueQrCodeScalarFieldEnum[] | DelegueQrCodeScalarFieldEnum
    having?: DelegueQrCodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DelegueQrCodeCountAggregateInputType | true
    _min?: DelegueQrCodeMinAggregateInputType
    _max?: DelegueQrCodeMaxAggregateInputType
  }

  export type DelegueQrCodeGroupByOutputType = {
    id: string
    delegueId: string
    uniqueKey: string
    qrUrl: string
    qrImageData: string | null
    generatedAt: Date
    isActive: boolean
    _count: DelegueQrCodeCountAggregateOutputType | null
    _min: DelegueQrCodeMinAggregateOutputType | null
    _max: DelegueQrCodeMaxAggregateOutputType | null
  }

  type GetDelegueQrCodeGroupByPayload<T extends DelegueQrCodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DelegueQrCodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DelegueQrCodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DelegueQrCodeGroupByOutputType[P]>
            : GetScalarType<T[P], DelegueQrCodeGroupByOutputType[P]>
        }
      >
    >


  export type DelegueQrCodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    delegueId?: boolean
    uniqueKey?: boolean
    qrUrl?: boolean
    qrImageData?: boolean
    generatedAt?: boolean
    isActive?: boolean
    delegue?: boolean | DelegueDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["delegueQrCode"]>



  export type DelegueQrCodeSelectScalar = {
    id?: boolean
    delegueId?: boolean
    uniqueKey?: boolean
    qrUrl?: boolean
    qrImageData?: boolean
    generatedAt?: boolean
    isActive?: boolean
  }

  export type DelegueQrCodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "delegueId" | "uniqueKey" | "qrUrl" | "qrImageData" | "generatedAt" | "isActive", ExtArgs["result"]["delegueQrCode"]>
  export type DelegueQrCodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    delegue?: boolean | DelegueDefaultArgs<ExtArgs>
  }

  export type $DelegueQrCodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DelegueQrCode"
    objects: {
      delegue: Prisma.$DeleguePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      delegueId: string
      uniqueKey: string
      qrUrl: string
      qrImageData: string | null
      generatedAt: Date
      isActive: boolean
    }, ExtArgs["result"]["delegueQrCode"]>
    composites: {}
  }

  type DelegueQrCodeGetPayload<S extends boolean | null | undefined | DelegueQrCodeDefaultArgs> = $Result.GetResult<Prisma.$DelegueQrCodePayload, S>

  type DelegueQrCodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DelegueQrCodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DelegueQrCodeCountAggregateInputType | true
    }

  export interface DelegueQrCodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DelegueQrCode'], meta: { name: 'DelegueQrCode' } }
    /**
     * Find zero or one DelegueQrCode that matches the filter.
     * @param {DelegueQrCodeFindUniqueArgs} args - Arguments to find a DelegueQrCode
     * @example
     * // Get one DelegueQrCode
     * const delegueQrCode = await prisma.delegueQrCode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DelegueQrCodeFindUniqueArgs>(args: SelectSubset<T, DelegueQrCodeFindUniqueArgs<ExtArgs>>): Prisma__DelegueQrCodeClient<$Result.GetResult<Prisma.$DelegueQrCodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DelegueQrCode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DelegueQrCodeFindUniqueOrThrowArgs} args - Arguments to find a DelegueQrCode
     * @example
     * // Get one DelegueQrCode
     * const delegueQrCode = await prisma.delegueQrCode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DelegueQrCodeFindUniqueOrThrowArgs>(args: SelectSubset<T, DelegueQrCodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DelegueQrCodeClient<$Result.GetResult<Prisma.$DelegueQrCodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DelegueQrCode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DelegueQrCodeFindFirstArgs} args - Arguments to find a DelegueQrCode
     * @example
     * // Get one DelegueQrCode
     * const delegueQrCode = await prisma.delegueQrCode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DelegueQrCodeFindFirstArgs>(args?: SelectSubset<T, DelegueQrCodeFindFirstArgs<ExtArgs>>): Prisma__DelegueQrCodeClient<$Result.GetResult<Prisma.$DelegueQrCodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DelegueQrCode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DelegueQrCodeFindFirstOrThrowArgs} args - Arguments to find a DelegueQrCode
     * @example
     * // Get one DelegueQrCode
     * const delegueQrCode = await prisma.delegueQrCode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DelegueQrCodeFindFirstOrThrowArgs>(args?: SelectSubset<T, DelegueQrCodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__DelegueQrCodeClient<$Result.GetResult<Prisma.$DelegueQrCodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DelegueQrCodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DelegueQrCodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DelegueQrCodes
     * const delegueQrCodes = await prisma.delegueQrCode.findMany()
     * 
     * // Get first 10 DelegueQrCodes
     * const delegueQrCodes = await prisma.delegueQrCode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const delegueQrCodeWithIdOnly = await prisma.delegueQrCode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DelegueQrCodeFindManyArgs>(args?: SelectSubset<T, DelegueQrCodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DelegueQrCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DelegueQrCode.
     * @param {DelegueQrCodeCreateArgs} args - Arguments to create a DelegueQrCode.
     * @example
     * // Create one DelegueQrCode
     * const DelegueQrCode = await prisma.delegueQrCode.create({
     *   data: {
     *     // ... data to create a DelegueQrCode
     *   }
     * })
     * 
     */
    create<T extends DelegueQrCodeCreateArgs>(args: SelectSubset<T, DelegueQrCodeCreateArgs<ExtArgs>>): Prisma__DelegueQrCodeClient<$Result.GetResult<Prisma.$DelegueQrCodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DelegueQrCodes.
     * @param {DelegueQrCodeCreateManyArgs} args - Arguments to create many DelegueQrCodes.
     * @example
     * // Create many DelegueQrCodes
     * const delegueQrCode = await prisma.delegueQrCode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DelegueQrCodeCreateManyArgs>(args?: SelectSubset<T, DelegueQrCodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DelegueQrCode.
     * @param {DelegueQrCodeDeleteArgs} args - Arguments to delete one DelegueQrCode.
     * @example
     * // Delete one DelegueQrCode
     * const DelegueQrCode = await prisma.delegueQrCode.delete({
     *   where: {
     *     // ... filter to delete one DelegueQrCode
     *   }
     * })
     * 
     */
    delete<T extends DelegueQrCodeDeleteArgs>(args: SelectSubset<T, DelegueQrCodeDeleteArgs<ExtArgs>>): Prisma__DelegueQrCodeClient<$Result.GetResult<Prisma.$DelegueQrCodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DelegueQrCode.
     * @param {DelegueQrCodeUpdateArgs} args - Arguments to update one DelegueQrCode.
     * @example
     * // Update one DelegueQrCode
     * const delegueQrCode = await prisma.delegueQrCode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DelegueQrCodeUpdateArgs>(args: SelectSubset<T, DelegueQrCodeUpdateArgs<ExtArgs>>): Prisma__DelegueQrCodeClient<$Result.GetResult<Prisma.$DelegueQrCodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DelegueQrCodes.
     * @param {DelegueQrCodeDeleteManyArgs} args - Arguments to filter DelegueQrCodes to delete.
     * @example
     * // Delete a few DelegueQrCodes
     * const { count } = await prisma.delegueQrCode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DelegueQrCodeDeleteManyArgs>(args?: SelectSubset<T, DelegueQrCodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DelegueQrCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DelegueQrCodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DelegueQrCodes
     * const delegueQrCode = await prisma.delegueQrCode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DelegueQrCodeUpdateManyArgs>(args: SelectSubset<T, DelegueQrCodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DelegueQrCode.
     * @param {DelegueQrCodeUpsertArgs} args - Arguments to update or create a DelegueQrCode.
     * @example
     * // Update or create a DelegueQrCode
     * const delegueQrCode = await prisma.delegueQrCode.upsert({
     *   create: {
     *     // ... data to create a DelegueQrCode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DelegueQrCode we want to update
     *   }
     * })
     */
    upsert<T extends DelegueQrCodeUpsertArgs>(args: SelectSubset<T, DelegueQrCodeUpsertArgs<ExtArgs>>): Prisma__DelegueQrCodeClient<$Result.GetResult<Prisma.$DelegueQrCodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DelegueQrCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DelegueQrCodeCountArgs} args - Arguments to filter DelegueQrCodes to count.
     * @example
     * // Count the number of DelegueQrCodes
     * const count = await prisma.delegueQrCode.count({
     *   where: {
     *     // ... the filter for the DelegueQrCodes we want to count
     *   }
     * })
    **/
    count<T extends DelegueQrCodeCountArgs>(
      args?: Subset<T, DelegueQrCodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DelegueQrCodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DelegueQrCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DelegueQrCodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DelegueQrCodeAggregateArgs>(args: Subset<T, DelegueQrCodeAggregateArgs>): Prisma.PrismaPromise<GetDelegueQrCodeAggregateType<T>>

    /**
     * Group by DelegueQrCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DelegueQrCodeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DelegueQrCodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DelegueQrCodeGroupByArgs['orderBy'] }
        : { orderBy?: DelegueQrCodeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DelegueQrCodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDelegueQrCodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DelegueQrCode model
   */
  readonly fields: DelegueQrCodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DelegueQrCode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DelegueQrCodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    delegue<T extends DelegueDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DelegueDefaultArgs<ExtArgs>>): Prisma__DelegueClient<$Result.GetResult<Prisma.$DeleguePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DelegueQrCode model
   */
  interface DelegueQrCodeFieldRefs {
    readonly id: FieldRef<"DelegueQrCode", 'String'>
    readonly delegueId: FieldRef<"DelegueQrCode", 'String'>
    readonly uniqueKey: FieldRef<"DelegueQrCode", 'String'>
    readonly qrUrl: FieldRef<"DelegueQrCode", 'String'>
    readonly qrImageData: FieldRef<"DelegueQrCode", 'String'>
    readonly generatedAt: FieldRef<"DelegueQrCode", 'DateTime'>
    readonly isActive: FieldRef<"DelegueQrCode", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * DelegueQrCode findUnique
   */
  export type DelegueQrCodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DelegueQrCode
     */
    select?: DelegueQrCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DelegueQrCode
     */
    omit?: DelegueQrCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DelegueQrCodeInclude<ExtArgs> | null
    /**
     * Filter, which DelegueQrCode to fetch.
     */
    where: DelegueQrCodeWhereUniqueInput
  }

  /**
   * DelegueQrCode findUniqueOrThrow
   */
  export type DelegueQrCodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DelegueQrCode
     */
    select?: DelegueQrCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DelegueQrCode
     */
    omit?: DelegueQrCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DelegueQrCodeInclude<ExtArgs> | null
    /**
     * Filter, which DelegueQrCode to fetch.
     */
    where: DelegueQrCodeWhereUniqueInput
  }

  /**
   * DelegueQrCode findFirst
   */
  export type DelegueQrCodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DelegueQrCode
     */
    select?: DelegueQrCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DelegueQrCode
     */
    omit?: DelegueQrCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DelegueQrCodeInclude<ExtArgs> | null
    /**
     * Filter, which DelegueQrCode to fetch.
     */
    where?: DelegueQrCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DelegueQrCodes to fetch.
     */
    orderBy?: DelegueQrCodeOrderByWithRelationInput | DelegueQrCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DelegueQrCodes.
     */
    cursor?: DelegueQrCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DelegueQrCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DelegueQrCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DelegueQrCodes.
     */
    distinct?: DelegueQrCodeScalarFieldEnum | DelegueQrCodeScalarFieldEnum[]
  }

  /**
   * DelegueQrCode findFirstOrThrow
   */
  export type DelegueQrCodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DelegueQrCode
     */
    select?: DelegueQrCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DelegueQrCode
     */
    omit?: DelegueQrCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DelegueQrCodeInclude<ExtArgs> | null
    /**
     * Filter, which DelegueQrCode to fetch.
     */
    where?: DelegueQrCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DelegueQrCodes to fetch.
     */
    orderBy?: DelegueQrCodeOrderByWithRelationInput | DelegueQrCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DelegueQrCodes.
     */
    cursor?: DelegueQrCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DelegueQrCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DelegueQrCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DelegueQrCodes.
     */
    distinct?: DelegueQrCodeScalarFieldEnum | DelegueQrCodeScalarFieldEnum[]
  }

  /**
   * DelegueQrCode findMany
   */
  export type DelegueQrCodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DelegueQrCode
     */
    select?: DelegueQrCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DelegueQrCode
     */
    omit?: DelegueQrCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DelegueQrCodeInclude<ExtArgs> | null
    /**
     * Filter, which DelegueQrCodes to fetch.
     */
    where?: DelegueQrCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DelegueQrCodes to fetch.
     */
    orderBy?: DelegueQrCodeOrderByWithRelationInput | DelegueQrCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DelegueQrCodes.
     */
    cursor?: DelegueQrCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DelegueQrCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DelegueQrCodes.
     */
    skip?: number
    distinct?: DelegueQrCodeScalarFieldEnum | DelegueQrCodeScalarFieldEnum[]
  }

  /**
   * DelegueQrCode create
   */
  export type DelegueQrCodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DelegueQrCode
     */
    select?: DelegueQrCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DelegueQrCode
     */
    omit?: DelegueQrCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DelegueQrCodeInclude<ExtArgs> | null
    /**
     * The data needed to create a DelegueQrCode.
     */
    data: XOR<DelegueQrCodeCreateInput, DelegueQrCodeUncheckedCreateInput>
  }

  /**
   * DelegueQrCode createMany
   */
  export type DelegueQrCodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DelegueQrCodes.
     */
    data: DelegueQrCodeCreateManyInput | DelegueQrCodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DelegueQrCode update
   */
  export type DelegueQrCodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DelegueQrCode
     */
    select?: DelegueQrCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DelegueQrCode
     */
    omit?: DelegueQrCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DelegueQrCodeInclude<ExtArgs> | null
    /**
     * The data needed to update a DelegueQrCode.
     */
    data: XOR<DelegueQrCodeUpdateInput, DelegueQrCodeUncheckedUpdateInput>
    /**
     * Choose, which DelegueQrCode to update.
     */
    where: DelegueQrCodeWhereUniqueInput
  }

  /**
   * DelegueQrCode updateMany
   */
  export type DelegueQrCodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DelegueQrCodes.
     */
    data: XOR<DelegueQrCodeUpdateManyMutationInput, DelegueQrCodeUncheckedUpdateManyInput>
    /**
     * Filter which DelegueQrCodes to update
     */
    where?: DelegueQrCodeWhereInput
    /**
     * Limit how many DelegueQrCodes to update.
     */
    limit?: number
  }

  /**
   * DelegueQrCode upsert
   */
  export type DelegueQrCodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DelegueQrCode
     */
    select?: DelegueQrCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DelegueQrCode
     */
    omit?: DelegueQrCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DelegueQrCodeInclude<ExtArgs> | null
    /**
     * The filter to search for the DelegueQrCode to update in case it exists.
     */
    where: DelegueQrCodeWhereUniqueInput
    /**
     * In case the DelegueQrCode found by the `where` argument doesn't exist, create a new DelegueQrCode with this data.
     */
    create: XOR<DelegueQrCodeCreateInput, DelegueQrCodeUncheckedCreateInput>
    /**
     * In case the DelegueQrCode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DelegueQrCodeUpdateInput, DelegueQrCodeUncheckedUpdateInput>
  }

  /**
   * DelegueQrCode delete
   */
  export type DelegueQrCodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DelegueQrCode
     */
    select?: DelegueQrCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DelegueQrCode
     */
    omit?: DelegueQrCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DelegueQrCodeInclude<ExtArgs> | null
    /**
     * Filter which DelegueQrCode to delete.
     */
    where: DelegueQrCodeWhereUniqueInput
  }

  /**
   * DelegueQrCode deleteMany
   */
  export type DelegueQrCodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DelegueQrCodes to delete
     */
    where?: DelegueQrCodeWhereInput
    /**
     * Limit how many DelegueQrCodes to delete.
     */
    limit?: number
  }

  /**
   * DelegueQrCode without action
   */
  export type DelegueQrCodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DelegueQrCode
     */
    select?: DelegueQrCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DelegueQrCode
     */
    omit?: DelegueQrCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DelegueQrCodeInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    sortOrder: number | null
  }

  export type ProductSumAggregateOutputType = {
    sortOrder: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    indication: string | null
    description: string | null
    argumentKey: string | null
    whyItWorks: string | null
    imageUrl: string | null
    isActive: boolean | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    indication: string | null
    description: string | null
    argumentKey: string | null
    whyItWorks: string | null
    imageUrl: string | null
    isActive: boolean | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    indication: number
    description: number
    argumentKey: number
    whyItWorks: number
    imageUrl: number
    isActive: number
    sortOrder: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    sortOrder?: true
  }

  export type ProductSumAggregateInputType = {
    sortOrder?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    indication?: true
    description?: true
    argumentKey?: true
    whyItWorks?: true
    imageUrl?: true
    isActive?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    indication?: true
    description?: true
    argumentKey?: true
    whyItWorks?: true
    imageUrl?: true
    isActive?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    indication?: true
    description?: true
    argumentKey?: true
    whyItWorks?: true
    imageUrl?: true
    isActive?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    name: string
    slug: string
    indication: string
    description: string | null
    argumentKey: string | null
    whyItWorks: string | null
    imageUrl: string | null
    isActive: boolean
    sortOrder: number
    createdAt: Date
    updatedAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    indication?: boolean
    description?: boolean
    argumentKey?: boolean
    whyItWorks?: boolean
    imageUrl?: boolean
    isActive?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sales?: boolean | Product$salesArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>



  export type ProductSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    indication?: boolean
    description?: boolean
    argumentKey?: boolean
    whyItWorks?: boolean
    imageUrl?: boolean
    isActive?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "indication" | "description" | "argumentKey" | "whyItWorks" | "imageUrl" | "isActive" | "sortOrder" | "createdAt" | "updatedAt", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sales?: boolean | Product$salesArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      sales: Prisma.$SalePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      indication: string
      description: string | null
      argumentKey: string | null
      whyItWorks: string | null
      imageUrl: string | null
      isActive: boolean
      sortOrder: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sales<T extends Product$salesArgs<ExtArgs> = {}>(args?: Subset<T, Product$salesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly name: FieldRef<"Product", 'String'>
    readonly slug: FieldRef<"Product", 'String'>
    readonly indication: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly argumentKey: FieldRef<"Product", 'String'>
    readonly whyItWorks: FieldRef<"Product", 'String'>
    readonly imageUrl: FieldRef<"Product", 'String'>
    readonly isActive: FieldRef<"Product", 'Boolean'>
    readonly sortOrder: FieldRef<"Product", 'Int'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.sales
   */
  export type Product$salesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    where?: SaleWhereInput
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    cursor?: SaleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model Sale
   */

  export type AggregateSale = {
    _count: SaleCountAggregateOutputType | null
    _avg: SaleAvgAggregateOutputType | null
    _sum: SaleSumAggregateOutputType | null
    _min: SaleMinAggregateOutputType | null
    _max: SaleMaxAggregateOutputType | null
  }

  export type SaleAvgAggregateOutputType = {
    quantity: number | null
    unitPrice: number | null
  }

  export type SaleSumAggregateOutputType = {
    quantity: number | null
    unitPrice: number | null
  }

  export type SaleMinAggregateOutputType = {
    id: string | null
    vendorId: string | null
    productId: string | null
    productName: string | null
    quantity: number | null
    unitPrice: number | null
    saleDate: Date | null
    periodId: string | null
    createdAt: Date | null
  }

  export type SaleMaxAggregateOutputType = {
    id: string | null
    vendorId: string | null
    productId: string | null
    productName: string | null
    quantity: number | null
    unitPrice: number | null
    saleDate: Date | null
    periodId: string | null
    createdAt: Date | null
  }

  export type SaleCountAggregateOutputType = {
    id: number
    vendorId: number
    productId: number
    productName: number
    quantity: number
    unitPrice: number
    saleDate: number
    periodId: number
    createdAt: number
    _all: number
  }


  export type SaleAvgAggregateInputType = {
    quantity?: true
    unitPrice?: true
  }

  export type SaleSumAggregateInputType = {
    quantity?: true
    unitPrice?: true
  }

  export type SaleMinAggregateInputType = {
    id?: true
    vendorId?: true
    productId?: true
    productName?: true
    quantity?: true
    unitPrice?: true
    saleDate?: true
    periodId?: true
    createdAt?: true
  }

  export type SaleMaxAggregateInputType = {
    id?: true
    vendorId?: true
    productId?: true
    productName?: true
    quantity?: true
    unitPrice?: true
    saleDate?: true
    periodId?: true
    createdAt?: true
  }

  export type SaleCountAggregateInputType = {
    id?: true
    vendorId?: true
    productId?: true
    productName?: true
    quantity?: true
    unitPrice?: true
    saleDate?: true
    periodId?: true
    createdAt?: true
    _all?: true
  }

  export type SaleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sale to aggregate.
     */
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sales
    **/
    _count?: true | SaleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SaleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SaleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SaleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SaleMaxAggregateInputType
  }

  export type GetSaleAggregateType<T extends SaleAggregateArgs> = {
        [P in keyof T & keyof AggregateSale]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSale[P]>
      : GetScalarType<T[P], AggregateSale[P]>
  }




  export type SaleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleWhereInput
    orderBy?: SaleOrderByWithAggregationInput | SaleOrderByWithAggregationInput[]
    by: SaleScalarFieldEnum[] | SaleScalarFieldEnum
    having?: SaleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SaleCountAggregateInputType | true
    _avg?: SaleAvgAggregateInputType
    _sum?: SaleSumAggregateInputType
    _min?: SaleMinAggregateInputType
    _max?: SaleMaxAggregateInputType
  }

  export type SaleGroupByOutputType = {
    id: string
    vendorId: string
    productId: string | null
    productName: string
    quantity: number
    unitPrice: number
    saleDate: Date
    periodId: string | null
    createdAt: Date
    _count: SaleCountAggregateOutputType | null
    _avg: SaleAvgAggregateOutputType | null
    _sum: SaleSumAggregateOutputType | null
    _min: SaleMinAggregateOutputType | null
    _max: SaleMaxAggregateOutputType | null
  }

  type GetSaleGroupByPayload<T extends SaleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SaleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SaleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SaleGroupByOutputType[P]>
            : GetScalarType<T[P], SaleGroupByOutputType[P]>
        }
      >
    >


  export type SaleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vendorId?: boolean
    productId?: boolean
    productName?: boolean
    quantity?: boolean
    unitPrice?: boolean
    saleDate?: boolean
    periodId?: boolean
    createdAt?: boolean
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
    product?: boolean | Sale$productArgs<ExtArgs>
    period?: boolean | Sale$periodArgs<ExtArgs>
  }, ExtArgs["result"]["sale"]>



  export type SaleSelectScalar = {
    id?: boolean
    vendorId?: boolean
    productId?: boolean
    productName?: boolean
    quantity?: boolean
    unitPrice?: boolean
    saleDate?: boolean
    periodId?: boolean
    createdAt?: boolean
  }

  export type SaleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vendorId" | "productId" | "productName" | "quantity" | "unitPrice" | "saleDate" | "periodId" | "createdAt", ExtArgs["result"]["sale"]>
  export type SaleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
    product?: boolean | Sale$productArgs<ExtArgs>
    period?: boolean | Sale$periodArgs<ExtArgs>
  }

  export type $SalePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sale"
    objects: {
      vendor: Prisma.$VendorPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs> | null
      period: Prisma.$PaymentPeriodPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      vendorId: string
      productId: string | null
      productName: string
      quantity: number
      unitPrice: number
      saleDate: Date
      periodId: string | null
      createdAt: Date
    }, ExtArgs["result"]["sale"]>
    composites: {}
  }

  type SaleGetPayload<S extends boolean | null | undefined | SaleDefaultArgs> = $Result.GetResult<Prisma.$SalePayload, S>

  type SaleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SaleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SaleCountAggregateInputType | true
    }

  export interface SaleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sale'], meta: { name: 'Sale' } }
    /**
     * Find zero or one Sale that matches the filter.
     * @param {SaleFindUniqueArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SaleFindUniqueArgs>(args: SelectSubset<T, SaleFindUniqueArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sale that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SaleFindUniqueOrThrowArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SaleFindUniqueOrThrowArgs>(args: SelectSubset<T, SaleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sale that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleFindFirstArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SaleFindFirstArgs>(args?: SelectSubset<T, SaleFindFirstArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sale that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleFindFirstOrThrowArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SaleFindFirstOrThrowArgs>(args?: SelectSubset<T, SaleFindFirstOrThrowArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sales
     * const sales = await prisma.sale.findMany()
     * 
     * // Get first 10 Sales
     * const sales = await prisma.sale.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const saleWithIdOnly = await prisma.sale.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SaleFindManyArgs>(args?: SelectSubset<T, SaleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sale.
     * @param {SaleCreateArgs} args - Arguments to create a Sale.
     * @example
     * // Create one Sale
     * const Sale = await prisma.sale.create({
     *   data: {
     *     // ... data to create a Sale
     *   }
     * })
     * 
     */
    create<T extends SaleCreateArgs>(args: SelectSubset<T, SaleCreateArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sales.
     * @param {SaleCreateManyArgs} args - Arguments to create many Sales.
     * @example
     * // Create many Sales
     * const sale = await prisma.sale.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SaleCreateManyArgs>(args?: SelectSubset<T, SaleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sale.
     * @param {SaleDeleteArgs} args - Arguments to delete one Sale.
     * @example
     * // Delete one Sale
     * const Sale = await prisma.sale.delete({
     *   where: {
     *     // ... filter to delete one Sale
     *   }
     * })
     * 
     */
    delete<T extends SaleDeleteArgs>(args: SelectSubset<T, SaleDeleteArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sale.
     * @param {SaleUpdateArgs} args - Arguments to update one Sale.
     * @example
     * // Update one Sale
     * const sale = await prisma.sale.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SaleUpdateArgs>(args: SelectSubset<T, SaleUpdateArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sales.
     * @param {SaleDeleteManyArgs} args - Arguments to filter Sales to delete.
     * @example
     * // Delete a few Sales
     * const { count } = await prisma.sale.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SaleDeleteManyArgs>(args?: SelectSubset<T, SaleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sales
     * const sale = await prisma.sale.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SaleUpdateManyArgs>(args: SelectSubset<T, SaleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sale.
     * @param {SaleUpsertArgs} args - Arguments to update or create a Sale.
     * @example
     * // Update or create a Sale
     * const sale = await prisma.sale.upsert({
     *   create: {
     *     // ... data to create a Sale
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sale we want to update
     *   }
     * })
     */
    upsert<T extends SaleUpsertArgs>(args: SelectSubset<T, SaleUpsertArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleCountArgs} args - Arguments to filter Sales to count.
     * @example
     * // Count the number of Sales
     * const count = await prisma.sale.count({
     *   where: {
     *     // ... the filter for the Sales we want to count
     *   }
     * })
    **/
    count<T extends SaleCountArgs>(
      args?: Subset<T, SaleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SaleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sale.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SaleAggregateArgs>(args: Subset<T, SaleAggregateArgs>): Prisma.PrismaPromise<GetSaleAggregateType<T>>

    /**
     * Group by Sale.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SaleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SaleGroupByArgs['orderBy'] }
        : { orderBy?: SaleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SaleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSaleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sale model
   */
  readonly fields: SaleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sale.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SaleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vendor<T extends VendorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VendorDefaultArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends Sale$productArgs<ExtArgs> = {}>(args?: Subset<T, Sale$productArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    period<T extends Sale$periodArgs<ExtArgs> = {}>(args?: Subset<T, Sale$periodArgs<ExtArgs>>): Prisma__PaymentPeriodClient<$Result.GetResult<Prisma.$PaymentPeriodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Sale model
   */
  interface SaleFieldRefs {
    readonly id: FieldRef<"Sale", 'String'>
    readonly vendorId: FieldRef<"Sale", 'String'>
    readonly productId: FieldRef<"Sale", 'String'>
    readonly productName: FieldRef<"Sale", 'String'>
    readonly quantity: FieldRef<"Sale", 'Int'>
    readonly unitPrice: FieldRef<"Sale", 'Float'>
    readonly saleDate: FieldRef<"Sale", 'DateTime'>
    readonly periodId: FieldRef<"Sale", 'String'>
    readonly createdAt: FieldRef<"Sale", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Sale findUnique
   */
  export type SaleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sale to fetch.
     */
    where: SaleWhereUniqueInput
  }

  /**
   * Sale findUniqueOrThrow
   */
  export type SaleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sale to fetch.
     */
    where: SaleWhereUniqueInput
  }

  /**
   * Sale findFirst
   */
  export type SaleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sale to fetch.
     */
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sales.
     */
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sales.
     */
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Sale findFirstOrThrow
   */
  export type SaleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sale to fetch.
     */
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sales.
     */
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sales.
     */
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Sale findMany
   */
  export type SaleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sales to fetch.
     */
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sales.
     */
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Sale create
   */
  export type SaleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * The data needed to create a Sale.
     */
    data: XOR<SaleCreateInput, SaleUncheckedCreateInput>
  }

  /**
   * Sale createMany
   */
  export type SaleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sales.
     */
    data: SaleCreateManyInput | SaleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sale update
   */
  export type SaleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * The data needed to update a Sale.
     */
    data: XOR<SaleUpdateInput, SaleUncheckedUpdateInput>
    /**
     * Choose, which Sale to update.
     */
    where: SaleWhereUniqueInput
  }

  /**
   * Sale updateMany
   */
  export type SaleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sales.
     */
    data: XOR<SaleUpdateManyMutationInput, SaleUncheckedUpdateManyInput>
    /**
     * Filter which Sales to update
     */
    where?: SaleWhereInput
    /**
     * Limit how many Sales to update.
     */
    limit?: number
  }

  /**
   * Sale upsert
   */
  export type SaleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * The filter to search for the Sale to update in case it exists.
     */
    where: SaleWhereUniqueInput
    /**
     * In case the Sale found by the `where` argument doesn't exist, create a new Sale with this data.
     */
    create: XOR<SaleCreateInput, SaleUncheckedCreateInput>
    /**
     * In case the Sale was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SaleUpdateInput, SaleUncheckedUpdateInput>
  }

  /**
   * Sale delete
   */
  export type SaleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter which Sale to delete.
     */
    where: SaleWhereUniqueInput
  }

  /**
   * Sale deleteMany
   */
  export type SaleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sales to delete
     */
    where?: SaleWhereInput
    /**
     * Limit how many Sales to delete.
     */
    limit?: number
  }

  /**
   * Sale.product
   */
  export type Sale$productArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
  }

  /**
   * Sale.period
   */
  export type Sale$periodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPeriod
     */
    select?: PaymentPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPeriod
     */
    omit?: PaymentPeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentPeriodInclude<ExtArgs> | null
    where?: PaymentPeriodWhereInput
  }

  /**
   * Sale without action
   */
  export type SaleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
  }


  /**
   * Model PaymentPeriod
   */

  export type AggregatePaymentPeriod = {
    _count: PaymentPeriodCountAggregateOutputType | null
    _avg: PaymentPeriodAvgAggregateOutputType | null
    _sum: PaymentPeriodSumAggregateOutputType | null
    _min: PaymentPeriodMinAggregateOutputType | null
    _max: PaymentPeriodMaxAggregateOutputType | null
  }

  export type PaymentPeriodAvgAggregateOutputType = {
    totalSales: number | null
    totalCommission: number | null
  }

  export type PaymentPeriodSumAggregateOutputType = {
    totalSales: number | null
    totalCommission: number | null
  }

  export type PaymentPeriodMinAggregateOutputType = {
    id: string | null
    vendorId: string | null
    periodType: string | null
    startDate: Date | null
    endDate: Date | null
    totalSales: number | null
    totalCommission: number | null
    status: string | null
    paidAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentPeriodMaxAggregateOutputType = {
    id: string | null
    vendorId: string | null
    periodType: string | null
    startDate: Date | null
    endDate: Date | null
    totalSales: number | null
    totalCommission: number | null
    status: string | null
    paidAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentPeriodCountAggregateOutputType = {
    id: number
    vendorId: number
    periodType: number
    startDate: number
    endDate: number
    totalSales: number
    totalCommission: number
    status: number
    paidAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentPeriodAvgAggregateInputType = {
    totalSales?: true
    totalCommission?: true
  }

  export type PaymentPeriodSumAggregateInputType = {
    totalSales?: true
    totalCommission?: true
  }

  export type PaymentPeriodMinAggregateInputType = {
    id?: true
    vendorId?: true
    periodType?: true
    startDate?: true
    endDate?: true
    totalSales?: true
    totalCommission?: true
    status?: true
    paidAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentPeriodMaxAggregateInputType = {
    id?: true
    vendorId?: true
    periodType?: true
    startDate?: true
    endDate?: true
    totalSales?: true
    totalCommission?: true
    status?: true
    paidAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentPeriodCountAggregateInputType = {
    id?: true
    vendorId?: true
    periodType?: true
    startDate?: true
    endDate?: true
    totalSales?: true
    totalCommission?: true
    status?: true
    paidAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentPeriodAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentPeriod to aggregate.
     */
    where?: PaymentPeriodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentPeriods to fetch.
     */
    orderBy?: PaymentPeriodOrderByWithRelationInput | PaymentPeriodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentPeriodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentPeriods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentPeriods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentPeriods
    **/
    _count?: true | PaymentPeriodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentPeriodAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentPeriodSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentPeriodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentPeriodMaxAggregateInputType
  }

  export type GetPaymentPeriodAggregateType<T extends PaymentPeriodAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentPeriod]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentPeriod[P]>
      : GetScalarType<T[P], AggregatePaymentPeriod[P]>
  }




  export type PaymentPeriodGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentPeriodWhereInput
    orderBy?: PaymentPeriodOrderByWithAggregationInput | PaymentPeriodOrderByWithAggregationInput[]
    by: PaymentPeriodScalarFieldEnum[] | PaymentPeriodScalarFieldEnum
    having?: PaymentPeriodScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentPeriodCountAggregateInputType | true
    _avg?: PaymentPeriodAvgAggregateInputType
    _sum?: PaymentPeriodSumAggregateInputType
    _min?: PaymentPeriodMinAggregateInputType
    _max?: PaymentPeriodMaxAggregateInputType
  }

  export type PaymentPeriodGroupByOutputType = {
    id: string
    vendorId: string
    periodType: string
    startDate: Date
    endDate: Date
    totalSales: number
    totalCommission: number
    status: string
    paidAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: PaymentPeriodCountAggregateOutputType | null
    _avg: PaymentPeriodAvgAggregateOutputType | null
    _sum: PaymentPeriodSumAggregateOutputType | null
    _min: PaymentPeriodMinAggregateOutputType | null
    _max: PaymentPeriodMaxAggregateOutputType | null
  }

  type GetPaymentPeriodGroupByPayload<T extends PaymentPeriodGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentPeriodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentPeriodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentPeriodGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentPeriodGroupByOutputType[P]>
        }
      >
    >


  export type PaymentPeriodSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vendorId?: boolean
    periodType?: boolean
    startDate?: boolean
    endDate?: boolean
    totalSales?: boolean
    totalCommission?: boolean
    status?: boolean
    paidAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
    sales?: boolean | PaymentPeriod$salesArgs<ExtArgs>
    _count?: boolean | PaymentPeriodCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentPeriod"]>



  export type PaymentPeriodSelectScalar = {
    id?: boolean
    vendorId?: boolean
    periodType?: boolean
    startDate?: boolean
    endDate?: boolean
    totalSales?: boolean
    totalCommission?: boolean
    status?: boolean
    paidAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PaymentPeriodOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vendorId" | "periodType" | "startDate" | "endDate" | "totalSales" | "totalCommission" | "status" | "paidAt" | "createdAt" | "updatedAt", ExtArgs["result"]["paymentPeriod"]>
  export type PaymentPeriodInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
    sales?: boolean | PaymentPeriod$salesArgs<ExtArgs>
    _count?: boolean | PaymentPeriodCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PaymentPeriodPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentPeriod"
    objects: {
      vendor: Prisma.$VendorPayload<ExtArgs>
      sales: Prisma.$SalePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      vendorId: string
      periodType: string
      startDate: Date
      endDate: Date
      totalSales: number
      totalCommission: number
      status: string
      paidAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["paymentPeriod"]>
    composites: {}
  }

  type PaymentPeriodGetPayload<S extends boolean | null | undefined | PaymentPeriodDefaultArgs> = $Result.GetResult<Prisma.$PaymentPeriodPayload, S>

  type PaymentPeriodCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentPeriodFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentPeriodCountAggregateInputType | true
    }

  export interface PaymentPeriodDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentPeriod'], meta: { name: 'PaymentPeriod' } }
    /**
     * Find zero or one PaymentPeriod that matches the filter.
     * @param {PaymentPeriodFindUniqueArgs} args - Arguments to find a PaymentPeriod
     * @example
     * // Get one PaymentPeriod
     * const paymentPeriod = await prisma.paymentPeriod.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentPeriodFindUniqueArgs>(args: SelectSubset<T, PaymentPeriodFindUniqueArgs<ExtArgs>>): Prisma__PaymentPeriodClient<$Result.GetResult<Prisma.$PaymentPeriodPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PaymentPeriod that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentPeriodFindUniqueOrThrowArgs} args - Arguments to find a PaymentPeriod
     * @example
     * // Get one PaymentPeriod
     * const paymentPeriod = await prisma.paymentPeriod.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentPeriodFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentPeriodFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentPeriodClient<$Result.GetResult<Prisma.$PaymentPeriodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentPeriod that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentPeriodFindFirstArgs} args - Arguments to find a PaymentPeriod
     * @example
     * // Get one PaymentPeriod
     * const paymentPeriod = await prisma.paymentPeriod.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentPeriodFindFirstArgs>(args?: SelectSubset<T, PaymentPeriodFindFirstArgs<ExtArgs>>): Prisma__PaymentPeriodClient<$Result.GetResult<Prisma.$PaymentPeriodPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentPeriod that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentPeriodFindFirstOrThrowArgs} args - Arguments to find a PaymentPeriod
     * @example
     * // Get one PaymentPeriod
     * const paymentPeriod = await prisma.paymentPeriod.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentPeriodFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentPeriodFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentPeriodClient<$Result.GetResult<Prisma.$PaymentPeriodPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PaymentPeriods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentPeriodFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentPeriods
     * const paymentPeriods = await prisma.paymentPeriod.findMany()
     * 
     * // Get first 10 PaymentPeriods
     * const paymentPeriods = await prisma.paymentPeriod.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentPeriodWithIdOnly = await prisma.paymentPeriod.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentPeriodFindManyArgs>(args?: SelectSubset<T, PaymentPeriodFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPeriodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PaymentPeriod.
     * @param {PaymentPeriodCreateArgs} args - Arguments to create a PaymentPeriod.
     * @example
     * // Create one PaymentPeriod
     * const PaymentPeriod = await prisma.paymentPeriod.create({
     *   data: {
     *     // ... data to create a PaymentPeriod
     *   }
     * })
     * 
     */
    create<T extends PaymentPeriodCreateArgs>(args: SelectSubset<T, PaymentPeriodCreateArgs<ExtArgs>>): Prisma__PaymentPeriodClient<$Result.GetResult<Prisma.$PaymentPeriodPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PaymentPeriods.
     * @param {PaymentPeriodCreateManyArgs} args - Arguments to create many PaymentPeriods.
     * @example
     * // Create many PaymentPeriods
     * const paymentPeriod = await prisma.paymentPeriod.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentPeriodCreateManyArgs>(args?: SelectSubset<T, PaymentPeriodCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PaymentPeriod.
     * @param {PaymentPeriodDeleteArgs} args - Arguments to delete one PaymentPeriod.
     * @example
     * // Delete one PaymentPeriod
     * const PaymentPeriod = await prisma.paymentPeriod.delete({
     *   where: {
     *     // ... filter to delete one PaymentPeriod
     *   }
     * })
     * 
     */
    delete<T extends PaymentPeriodDeleteArgs>(args: SelectSubset<T, PaymentPeriodDeleteArgs<ExtArgs>>): Prisma__PaymentPeriodClient<$Result.GetResult<Prisma.$PaymentPeriodPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PaymentPeriod.
     * @param {PaymentPeriodUpdateArgs} args - Arguments to update one PaymentPeriod.
     * @example
     * // Update one PaymentPeriod
     * const paymentPeriod = await prisma.paymentPeriod.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentPeriodUpdateArgs>(args: SelectSubset<T, PaymentPeriodUpdateArgs<ExtArgs>>): Prisma__PaymentPeriodClient<$Result.GetResult<Prisma.$PaymentPeriodPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PaymentPeriods.
     * @param {PaymentPeriodDeleteManyArgs} args - Arguments to filter PaymentPeriods to delete.
     * @example
     * // Delete a few PaymentPeriods
     * const { count } = await prisma.paymentPeriod.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentPeriodDeleteManyArgs>(args?: SelectSubset<T, PaymentPeriodDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentPeriods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentPeriodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentPeriods
     * const paymentPeriod = await prisma.paymentPeriod.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentPeriodUpdateManyArgs>(args: SelectSubset<T, PaymentPeriodUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PaymentPeriod.
     * @param {PaymentPeriodUpsertArgs} args - Arguments to update or create a PaymentPeriod.
     * @example
     * // Update or create a PaymentPeriod
     * const paymentPeriod = await prisma.paymentPeriod.upsert({
     *   create: {
     *     // ... data to create a PaymentPeriod
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentPeriod we want to update
     *   }
     * })
     */
    upsert<T extends PaymentPeriodUpsertArgs>(args: SelectSubset<T, PaymentPeriodUpsertArgs<ExtArgs>>): Prisma__PaymentPeriodClient<$Result.GetResult<Prisma.$PaymentPeriodPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PaymentPeriods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentPeriodCountArgs} args - Arguments to filter PaymentPeriods to count.
     * @example
     * // Count the number of PaymentPeriods
     * const count = await prisma.paymentPeriod.count({
     *   where: {
     *     // ... the filter for the PaymentPeriods we want to count
     *   }
     * })
    **/
    count<T extends PaymentPeriodCountArgs>(
      args?: Subset<T, PaymentPeriodCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentPeriodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentPeriod.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentPeriodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentPeriodAggregateArgs>(args: Subset<T, PaymentPeriodAggregateArgs>): Prisma.PrismaPromise<GetPaymentPeriodAggregateType<T>>

    /**
     * Group by PaymentPeriod.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentPeriodGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentPeriodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentPeriodGroupByArgs['orderBy'] }
        : { orderBy?: PaymentPeriodGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentPeriodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentPeriodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentPeriod model
   */
  readonly fields: PaymentPeriodFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentPeriod.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentPeriodClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vendor<T extends VendorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VendorDefaultArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sales<T extends PaymentPeriod$salesArgs<ExtArgs> = {}>(args?: Subset<T, PaymentPeriod$salesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PaymentPeriod model
   */
  interface PaymentPeriodFieldRefs {
    readonly id: FieldRef<"PaymentPeriod", 'String'>
    readonly vendorId: FieldRef<"PaymentPeriod", 'String'>
    readonly periodType: FieldRef<"PaymentPeriod", 'String'>
    readonly startDate: FieldRef<"PaymentPeriod", 'DateTime'>
    readonly endDate: FieldRef<"PaymentPeriod", 'DateTime'>
    readonly totalSales: FieldRef<"PaymentPeriod", 'Int'>
    readonly totalCommission: FieldRef<"PaymentPeriod", 'Float'>
    readonly status: FieldRef<"PaymentPeriod", 'String'>
    readonly paidAt: FieldRef<"PaymentPeriod", 'DateTime'>
    readonly createdAt: FieldRef<"PaymentPeriod", 'DateTime'>
    readonly updatedAt: FieldRef<"PaymentPeriod", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PaymentPeriod findUnique
   */
  export type PaymentPeriodFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPeriod
     */
    select?: PaymentPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPeriod
     */
    omit?: PaymentPeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentPeriodInclude<ExtArgs> | null
    /**
     * Filter, which PaymentPeriod to fetch.
     */
    where: PaymentPeriodWhereUniqueInput
  }

  /**
   * PaymentPeriod findUniqueOrThrow
   */
  export type PaymentPeriodFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPeriod
     */
    select?: PaymentPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPeriod
     */
    omit?: PaymentPeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentPeriodInclude<ExtArgs> | null
    /**
     * Filter, which PaymentPeriod to fetch.
     */
    where: PaymentPeriodWhereUniqueInput
  }

  /**
   * PaymentPeriod findFirst
   */
  export type PaymentPeriodFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPeriod
     */
    select?: PaymentPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPeriod
     */
    omit?: PaymentPeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentPeriodInclude<ExtArgs> | null
    /**
     * Filter, which PaymentPeriod to fetch.
     */
    where?: PaymentPeriodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentPeriods to fetch.
     */
    orderBy?: PaymentPeriodOrderByWithRelationInput | PaymentPeriodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentPeriods.
     */
    cursor?: PaymentPeriodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentPeriods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentPeriods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentPeriods.
     */
    distinct?: PaymentPeriodScalarFieldEnum | PaymentPeriodScalarFieldEnum[]
  }

  /**
   * PaymentPeriod findFirstOrThrow
   */
  export type PaymentPeriodFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPeriod
     */
    select?: PaymentPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPeriod
     */
    omit?: PaymentPeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentPeriodInclude<ExtArgs> | null
    /**
     * Filter, which PaymentPeriod to fetch.
     */
    where?: PaymentPeriodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentPeriods to fetch.
     */
    orderBy?: PaymentPeriodOrderByWithRelationInput | PaymentPeriodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentPeriods.
     */
    cursor?: PaymentPeriodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentPeriods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentPeriods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentPeriods.
     */
    distinct?: PaymentPeriodScalarFieldEnum | PaymentPeriodScalarFieldEnum[]
  }

  /**
   * PaymentPeriod findMany
   */
  export type PaymentPeriodFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPeriod
     */
    select?: PaymentPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPeriod
     */
    omit?: PaymentPeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentPeriodInclude<ExtArgs> | null
    /**
     * Filter, which PaymentPeriods to fetch.
     */
    where?: PaymentPeriodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentPeriods to fetch.
     */
    orderBy?: PaymentPeriodOrderByWithRelationInput | PaymentPeriodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentPeriods.
     */
    cursor?: PaymentPeriodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentPeriods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentPeriods.
     */
    skip?: number
    distinct?: PaymentPeriodScalarFieldEnum | PaymentPeriodScalarFieldEnum[]
  }

  /**
   * PaymentPeriod create
   */
  export type PaymentPeriodCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPeriod
     */
    select?: PaymentPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPeriod
     */
    omit?: PaymentPeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentPeriodInclude<ExtArgs> | null
    /**
     * The data needed to create a PaymentPeriod.
     */
    data: XOR<PaymentPeriodCreateInput, PaymentPeriodUncheckedCreateInput>
  }

  /**
   * PaymentPeriod createMany
   */
  export type PaymentPeriodCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentPeriods.
     */
    data: PaymentPeriodCreateManyInput | PaymentPeriodCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentPeriod update
   */
  export type PaymentPeriodUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPeriod
     */
    select?: PaymentPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPeriod
     */
    omit?: PaymentPeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentPeriodInclude<ExtArgs> | null
    /**
     * The data needed to update a PaymentPeriod.
     */
    data: XOR<PaymentPeriodUpdateInput, PaymentPeriodUncheckedUpdateInput>
    /**
     * Choose, which PaymentPeriod to update.
     */
    where: PaymentPeriodWhereUniqueInput
  }

  /**
   * PaymentPeriod updateMany
   */
  export type PaymentPeriodUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentPeriods.
     */
    data: XOR<PaymentPeriodUpdateManyMutationInput, PaymentPeriodUncheckedUpdateManyInput>
    /**
     * Filter which PaymentPeriods to update
     */
    where?: PaymentPeriodWhereInput
    /**
     * Limit how many PaymentPeriods to update.
     */
    limit?: number
  }

  /**
   * PaymentPeriod upsert
   */
  export type PaymentPeriodUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPeriod
     */
    select?: PaymentPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPeriod
     */
    omit?: PaymentPeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentPeriodInclude<ExtArgs> | null
    /**
     * The filter to search for the PaymentPeriod to update in case it exists.
     */
    where: PaymentPeriodWhereUniqueInput
    /**
     * In case the PaymentPeriod found by the `where` argument doesn't exist, create a new PaymentPeriod with this data.
     */
    create: XOR<PaymentPeriodCreateInput, PaymentPeriodUncheckedCreateInput>
    /**
     * In case the PaymentPeriod was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentPeriodUpdateInput, PaymentPeriodUncheckedUpdateInput>
  }

  /**
   * PaymentPeriod delete
   */
  export type PaymentPeriodDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPeriod
     */
    select?: PaymentPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPeriod
     */
    omit?: PaymentPeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentPeriodInclude<ExtArgs> | null
    /**
     * Filter which PaymentPeriod to delete.
     */
    where: PaymentPeriodWhereUniqueInput
  }

  /**
   * PaymentPeriod deleteMany
   */
  export type PaymentPeriodDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentPeriods to delete
     */
    where?: PaymentPeriodWhereInput
    /**
     * Limit how many PaymentPeriods to delete.
     */
    limit?: number
  }

  /**
   * PaymentPeriod.sales
   */
  export type PaymentPeriod$salesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    where?: SaleWhereInput
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    cursor?: SaleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * PaymentPeriod without action
   */
  export type PaymentPeriodDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPeriod
     */
    select?: PaymentPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPeriod
     */
    omit?: PaymentPeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentPeriodInclude<ExtArgs> | null
  }


  /**
   * Model CommissionRule
   */

  export type AggregateCommissionRule = {
    _count: CommissionRuleCountAggregateOutputType | null
    _avg: CommissionRuleAvgAggregateOutputType | null
    _sum: CommissionRuleSumAggregateOutputType | null
    _min: CommissionRuleMinAggregateOutputType | null
    _max: CommissionRuleMaxAggregateOutputType | null
  }

  export type CommissionRuleAvgAggregateOutputType = {
    quantityFrom: number | null
    quantityTo: number | null
    commissionPerProduct: number | null
    bonusPerProduct: number | null
  }

  export type CommissionRuleSumAggregateOutputType = {
    quantityFrom: number | null
    quantityTo: number | null
    commissionPerProduct: number | null
    bonusPerProduct: number | null
  }

  export type CommissionRuleMinAggregateOutputType = {
    id: string | null
    periodType: string | null
    quantityFrom: number | null
    quantityTo: number | null
    commissionPerProduct: number | null
    bonusPerProduct: number | null
    label: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommissionRuleMaxAggregateOutputType = {
    id: string | null
    periodType: string | null
    quantityFrom: number | null
    quantityTo: number | null
    commissionPerProduct: number | null
    bonusPerProduct: number | null
    label: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommissionRuleCountAggregateOutputType = {
    id: number
    periodType: number
    quantityFrom: number
    quantityTo: number
    commissionPerProduct: number
    bonusPerProduct: number
    label: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CommissionRuleAvgAggregateInputType = {
    quantityFrom?: true
    quantityTo?: true
    commissionPerProduct?: true
    bonusPerProduct?: true
  }

  export type CommissionRuleSumAggregateInputType = {
    quantityFrom?: true
    quantityTo?: true
    commissionPerProduct?: true
    bonusPerProduct?: true
  }

  export type CommissionRuleMinAggregateInputType = {
    id?: true
    periodType?: true
    quantityFrom?: true
    quantityTo?: true
    commissionPerProduct?: true
    bonusPerProduct?: true
    label?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommissionRuleMaxAggregateInputType = {
    id?: true
    periodType?: true
    quantityFrom?: true
    quantityTo?: true
    commissionPerProduct?: true
    bonusPerProduct?: true
    label?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommissionRuleCountAggregateInputType = {
    id?: true
    periodType?: true
    quantityFrom?: true
    quantityTo?: true
    commissionPerProduct?: true
    bonusPerProduct?: true
    label?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CommissionRuleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommissionRule to aggregate.
     */
    where?: CommissionRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommissionRules to fetch.
     */
    orderBy?: CommissionRuleOrderByWithRelationInput | CommissionRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommissionRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommissionRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommissionRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CommissionRules
    **/
    _count?: true | CommissionRuleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommissionRuleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommissionRuleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommissionRuleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommissionRuleMaxAggregateInputType
  }

  export type GetCommissionRuleAggregateType<T extends CommissionRuleAggregateArgs> = {
        [P in keyof T & keyof AggregateCommissionRule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommissionRule[P]>
      : GetScalarType<T[P], AggregateCommissionRule[P]>
  }




  export type CommissionRuleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommissionRuleWhereInput
    orderBy?: CommissionRuleOrderByWithAggregationInput | CommissionRuleOrderByWithAggregationInput[]
    by: CommissionRuleScalarFieldEnum[] | CommissionRuleScalarFieldEnum
    having?: CommissionRuleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommissionRuleCountAggregateInputType | true
    _avg?: CommissionRuleAvgAggregateInputType
    _sum?: CommissionRuleSumAggregateInputType
    _min?: CommissionRuleMinAggregateInputType
    _max?: CommissionRuleMaxAggregateInputType
  }

  export type CommissionRuleGroupByOutputType = {
    id: string
    periodType: string
    quantityFrom: number
    quantityTo: number | null
    commissionPerProduct: number
    bonusPerProduct: number
    label: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: CommissionRuleCountAggregateOutputType | null
    _avg: CommissionRuleAvgAggregateOutputType | null
    _sum: CommissionRuleSumAggregateOutputType | null
    _min: CommissionRuleMinAggregateOutputType | null
    _max: CommissionRuleMaxAggregateOutputType | null
  }

  type GetCommissionRuleGroupByPayload<T extends CommissionRuleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommissionRuleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommissionRuleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommissionRuleGroupByOutputType[P]>
            : GetScalarType<T[P], CommissionRuleGroupByOutputType[P]>
        }
      >
    >


  export type CommissionRuleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    periodType?: boolean
    quantityFrom?: boolean
    quantityTo?: boolean
    commissionPerProduct?: boolean
    bonusPerProduct?: boolean
    label?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["commissionRule"]>



  export type CommissionRuleSelectScalar = {
    id?: boolean
    periodType?: boolean
    quantityFrom?: boolean
    quantityTo?: boolean
    commissionPerProduct?: boolean
    bonusPerProduct?: boolean
    label?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CommissionRuleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "periodType" | "quantityFrom" | "quantityTo" | "commissionPerProduct" | "bonusPerProduct" | "label" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["commissionRule"]>

  export type $CommissionRulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CommissionRule"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      periodType: string
      quantityFrom: number
      quantityTo: number | null
      commissionPerProduct: number
      bonusPerProduct: number
      label: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["commissionRule"]>
    composites: {}
  }

  type CommissionRuleGetPayload<S extends boolean | null | undefined | CommissionRuleDefaultArgs> = $Result.GetResult<Prisma.$CommissionRulePayload, S>

  type CommissionRuleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommissionRuleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommissionRuleCountAggregateInputType | true
    }

  export interface CommissionRuleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CommissionRule'], meta: { name: 'CommissionRule' } }
    /**
     * Find zero or one CommissionRule that matches the filter.
     * @param {CommissionRuleFindUniqueArgs} args - Arguments to find a CommissionRule
     * @example
     * // Get one CommissionRule
     * const commissionRule = await prisma.commissionRule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommissionRuleFindUniqueArgs>(args: SelectSubset<T, CommissionRuleFindUniqueArgs<ExtArgs>>): Prisma__CommissionRuleClient<$Result.GetResult<Prisma.$CommissionRulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CommissionRule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommissionRuleFindUniqueOrThrowArgs} args - Arguments to find a CommissionRule
     * @example
     * // Get one CommissionRule
     * const commissionRule = await prisma.commissionRule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommissionRuleFindUniqueOrThrowArgs>(args: SelectSubset<T, CommissionRuleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommissionRuleClient<$Result.GetResult<Prisma.$CommissionRulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommissionRule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommissionRuleFindFirstArgs} args - Arguments to find a CommissionRule
     * @example
     * // Get one CommissionRule
     * const commissionRule = await prisma.commissionRule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommissionRuleFindFirstArgs>(args?: SelectSubset<T, CommissionRuleFindFirstArgs<ExtArgs>>): Prisma__CommissionRuleClient<$Result.GetResult<Prisma.$CommissionRulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommissionRule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommissionRuleFindFirstOrThrowArgs} args - Arguments to find a CommissionRule
     * @example
     * // Get one CommissionRule
     * const commissionRule = await prisma.commissionRule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommissionRuleFindFirstOrThrowArgs>(args?: SelectSubset<T, CommissionRuleFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommissionRuleClient<$Result.GetResult<Prisma.$CommissionRulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CommissionRules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommissionRuleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CommissionRules
     * const commissionRules = await prisma.commissionRule.findMany()
     * 
     * // Get first 10 CommissionRules
     * const commissionRules = await prisma.commissionRule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commissionRuleWithIdOnly = await prisma.commissionRule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommissionRuleFindManyArgs>(args?: SelectSubset<T, CommissionRuleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommissionRulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CommissionRule.
     * @param {CommissionRuleCreateArgs} args - Arguments to create a CommissionRule.
     * @example
     * // Create one CommissionRule
     * const CommissionRule = await prisma.commissionRule.create({
     *   data: {
     *     // ... data to create a CommissionRule
     *   }
     * })
     * 
     */
    create<T extends CommissionRuleCreateArgs>(args: SelectSubset<T, CommissionRuleCreateArgs<ExtArgs>>): Prisma__CommissionRuleClient<$Result.GetResult<Prisma.$CommissionRulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CommissionRules.
     * @param {CommissionRuleCreateManyArgs} args - Arguments to create many CommissionRules.
     * @example
     * // Create many CommissionRules
     * const commissionRule = await prisma.commissionRule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommissionRuleCreateManyArgs>(args?: SelectSubset<T, CommissionRuleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CommissionRule.
     * @param {CommissionRuleDeleteArgs} args - Arguments to delete one CommissionRule.
     * @example
     * // Delete one CommissionRule
     * const CommissionRule = await prisma.commissionRule.delete({
     *   where: {
     *     // ... filter to delete one CommissionRule
     *   }
     * })
     * 
     */
    delete<T extends CommissionRuleDeleteArgs>(args: SelectSubset<T, CommissionRuleDeleteArgs<ExtArgs>>): Prisma__CommissionRuleClient<$Result.GetResult<Prisma.$CommissionRulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CommissionRule.
     * @param {CommissionRuleUpdateArgs} args - Arguments to update one CommissionRule.
     * @example
     * // Update one CommissionRule
     * const commissionRule = await prisma.commissionRule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommissionRuleUpdateArgs>(args: SelectSubset<T, CommissionRuleUpdateArgs<ExtArgs>>): Prisma__CommissionRuleClient<$Result.GetResult<Prisma.$CommissionRulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CommissionRules.
     * @param {CommissionRuleDeleteManyArgs} args - Arguments to filter CommissionRules to delete.
     * @example
     * // Delete a few CommissionRules
     * const { count } = await prisma.commissionRule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommissionRuleDeleteManyArgs>(args?: SelectSubset<T, CommissionRuleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommissionRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommissionRuleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CommissionRules
     * const commissionRule = await prisma.commissionRule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommissionRuleUpdateManyArgs>(args: SelectSubset<T, CommissionRuleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CommissionRule.
     * @param {CommissionRuleUpsertArgs} args - Arguments to update or create a CommissionRule.
     * @example
     * // Update or create a CommissionRule
     * const commissionRule = await prisma.commissionRule.upsert({
     *   create: {
     *     // ... data to create a CommissionRule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CommissionRule we want to update
     *   }
     * })
     */
    upsert<T extends CommissionRuleUpsertArgs>(args: SelectSubset<T, CommissionRuleUpsertArgs<ExtArgs>>): Prisma__CommissionRuleClient<$Result.GetResult<Prisma.$CommissionRulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CommissionRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommissionRuleCountArgs} args - Arguments to filter CommissionRules to count.
     * @example
     * // Count the number of CommissionRules
     * const count = await prisma.commissionRule.count({
     *   where: {
     *     // ... the filter for the CommissionRules we want to count
     *   }
     * })
    **/
    count<T extends CommissionRuleCountArgs>(
      args?: Subset<T, CommissionRuleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommissionRuleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CommissionRule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommissionRuleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommissionRuleAggregateArgs>(args: Subset<T, CommissionRuleAggregateArgs>): Prisma.PrismaPromise<GetCommissionRuleAggregateType<T>>

    /**
     * Group by CommissionRule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommissionRuleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommissionRuleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommissionRuleGroupByArgs['orderBy'] }
        : { orderBy?: CommissionRuleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommissionRuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommissionRuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CommissionRule model
   */
  readonly fields: CommissionRuleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CommissionRule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommissionRuleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CommissionRule model
   */
  interface CommissionRuleFieldRefs {
    readonly id: FieldRef<"CommissionRule", 'String'>
    readonly periodType: FieldRef<"CommissionRule", 'String'>
    readonly quantityFrom: FieldRef<"CommissionRule", 'Int'>
    readonly quantityTo: FieldRef<"CommissionRule", 'Int'>
    readonly commissionPerProduct: FieldRef<"CommissionRule", 'Float'>
    readonly bonusPerProduct: FieldRef<"CommissionRule", 'Float'>
    readonly label: FieldRef<"CommissionRule", 'String'>
    readonly isActive: FieldRef<"CommissionRule", 'Boolean'>
    readonly createdAt: FieldRef<"CommissionRule", 'DateTime'>
    readonly updatedAt: FieldRef<"CommissionRule", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CommissionRule findUnique
   */
  export type CommissionRuleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommissionRule
     */
    select?: CommissionRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommissionRule
     */
    omit?: CommissionRuleOmit<ExtArgs> | null
    /**
     * Filter, which CommissionRule to fetch.
     */
    where: CommissionRuleWhereUniqueInput
  }

  /**
   * CommissionRule findUniqueOrThrow
   */
  export type CommissionRuleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommissionRule
     */
    select?: CommissionRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommissionRule
     */
    omit?: CommissionRuleOmit<ExtArgs> | null
    /**
     * Filter, which CommissionRule to fetch.
     */
    where: CommissionRuleWhereUniqueInput
  }

  /**
   * CommissionRule findFirst
   */
  export type CommissionRuleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommissionRule
     */
    select?: CommissionRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommissionRule
     */
    omit?: CommissionRuleOmit<ExtArgs> | null
    /**
     * Filter, which CommissionRule to fetch.
     */
    where?: CommissionRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommissionRules to fetch.
     */
    orderBy?: CommissionRuleOrderByWithRelationInput | CommissionRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommissionRules.
     */
    cursor?: CommissionRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommissionRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommissionRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommissionRules.
     */
    distinct?: CommissionRuleScalarFieldEnum | CommissionRuleScalarFieldEnum[]
  }

  /**
   * CommissionRule findFirstOrThrow
   */
  export type CommissionRuleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommissionRule
     */
    select?: CommissionRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommissionRule
     */
    omit?: CommissionRuleOmit<ExtArgs> | null
    /**
     * Filter, which CommissionRule to fetch.
     */
    where?: CommissionRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommissionRules to fetch.
     */
    orderBy?: CommissionRuleOrderByWithRelationInput | CommissionRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommissionRules.
     */
    cursor?: CommissionRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommissionRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommissionRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommissionRules.
     */
    distinct?: CommissionRuleScalarFieldEnum | CommissionRuleScalarFieldEnum[]
  }

  /**
   * CommissionRule findMany
   */
  export type CommissionRuleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommissionRule
     */
    select?: CommissionRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommissionRule
     */
    omit?: CommissionRuleOmit<ExtArgs> | null
    /**
     * Filter, which CommissionRules to fetch.
     */
    where?: CommissionRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommissionRules to fetch.
     */
    orderBy?: CommissionRuleOrderByWithRelationInput | CommissionRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CommissionRules.
     */
    cursor?: CommissionRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommissionRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommissionRules.
     */
    skip?: number
    distinct?: CommissionRuleScalarFieldEnum | CommissionRuleScalarFieldEnum[]
  }

  /**
   * CommissionRule create
   */
  export type CommissionRuleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommissionRule
     */
    select?: CommissionRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommissionRule
     */
    omit?: CommissionRuleOmit<ExtArgs> | null
    /**
     * The data needed to create a CommissionRule.
     */
    data: XOR<CommissionRuleCreateInput, CommissionRuleUncheckedCreateInput>
  }

  /**
   * CommissionRule createMany
   */
  export type CommissionRuleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CommissionRules.
     */
    data: CommissionRuleCreateManyInput | CommissionRuleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CommissionRule update
   */
  export type CommissionRuleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommissionRule
     */
    select?: CommissionRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommissionRule
     */
    omit?: CommissionRuleOmit<ExtArgs> | null
    /**
     * The data needed to update a CommissionRule.
     */
    data: XOR<CommissionRuleUpdateInput, CommissionRuleUncheckedUpdateInput>
    /**
     * Choose, which CommissionRule to update.
     */
    where: CommissionRuleWhereUniqueInput
  }

  /**
   * CommissionRule updateMany
   */
  export type CommissionRuleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CommissionRules.
     */
    data: XOR<CommissionRuleUpdateManyMutationInput, CommissionRuleUncheckedUpdateManyInput>
    /**
     * Filter which CommissionRules to update
     */
    where?: CommissionRuleWhereInput
    /**
     * Limit how many CommissionRules to update.
     */
    limit?: number
  }

  /**
   * CommissionRule upsert
   */
  export type CommissionRuleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommissionRule
     */
    select?: CommissionRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommissionRule
     */
    omit?: CommissionRuleOmit<ExtArgs> | null
    /**
     * The filter to search for the CommissionRule to update in case it exists.
     */
    where: CommissionRuleWhereUniqueInput
    /**
     * In case the CommissionRule found by the `where` argument doesn't exist, create a new CommissionRule with this data.
     */
    create: XOR<CommissionRuleCreateInput, CommissionRuleUncheckedCreateInput>
    /**
     * In case the CommissionRule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommissionRuleUpdateInput, CommissionRuleUncheckedUpdateInput>
  }

  /**
   * CommissionRule delete
   */
  export type CommissionRuleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommissionRule
     */
    select?: CommissionRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommissionRule
     */
    omit?: CommissionRuleOmit<ExtArgs> | null
    /**
     * Filter which CommissionRule to delete.
     */
    where: CommissionRuleWhereUniqueInput
  }

  /**
   * CommissionRule deleteMany
   */
  export type CommissionRuleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommissionRules to delete
     */
    where?: CommissionRuleWhereInput
    /**
     * Limit how many CommissionRules to delete.
     */
    limit?: number
  }

  /**
   * CommissionRule without action
   */
  export type CommissionRuleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommissionRule
     */
    select?: CommissionRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommissionRule
     */
    omit?: CommissionRuleOmit<ExtArgs> | null
  }


  /**
   * Model QrCode
   */

  export type AggregateQrCode = {
    _count: QrCodeCountAggregateOutputType | null
    _min: QrCodeMinAggregateOutputType | null
    _max: QrCodeMaxAggregateOutputType | null
  }

  export type QrCodeMinAggregateOutputType = {
    id: string | null
    vendorId: string | null
    uniqueKey: string | null
    qrUrl: string | null
    qrImageData: string | null
    generatedAt: Date | null
    isActive: boolean | null
  }

  export type QrCodeMaxAggregateOutputType = {
    id: string | null
    vendorId: string | null
    uniqueKey: string | null
    qrUrl: string | null
    qrImageData: string | null
    generatedAt: Date | null
    isActive: boolean | null
  }

  export type QrCodeCountAggregateOutputType = {
    id: number
    vendorId: number
    uniqueKey: number
    qrUrl: number
    qrImageData: number
    generatedAt: number
    isActive: number
    _all: number
  }


  export type QrCodeMinAggregateInputType = {
    id?: true
    vendorId?: true
    uniqueKey?: true
    qrUrl?: true
    qrImageData?: true
    generatedAt?: true
    isActive?: true
  }

  export type QrCodeMaxAggregateInputType = {
    id?: true
    vendorId?: true
    uniqueKey?: true
    qrUrl?: true
    qrImageData?: true
    generatedAt?: true
    isActive?: true
  }

  export type QrCodeCountAggregateInputType = {
    id?: true
    vendorId?: true
    uniqueKey?: true
    qrUrl?: true
    qrImageData?: true
    generatedAt?: true
    isActive?: true
    _all?: true
  }

  export type QrCodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QrCode to aggregate.
     */
    where?: QrCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QrCodes to fetch.
     */
    orderBy?: QrCodeOrderByWithRelationInput | QrCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QrCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QrCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QrCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QrCodes
    **/
    _count?: true | QrCodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QrCodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QrCodeMaxAggregateInputType
  }

  export type GetQrCodeAggregateType<T extends QrCodeAggregateArgs> = {
        [P in keyof T & keyof AggregateQrCode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQrCode[P]>
      : GetScalarType<T[P], AggregateQrCode[P]>
  }




  export type QrCodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QrCodeWhereInput
    orderBy?: QrCodeOrderByWithAggregationInput | QrCodeOrderByWithAggregationInput[]
    by: QrCodeScalarFieldEnum[] | QrCodeScalarFieldEnum
    having?: QrCodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QrCodeCountAggregateInputType | true
    _min?: QrCodeMinAggregateInputType
    _max?: QrCodeMaxAggregateInputType
  }

  export type QrCodeGroupByOutputType = {
    id: string
    vendorId: string
    uniqueKey: string
    qrUrl: string
    qrImageData: string | null
    generatedAt: Date
    isActive: boolean
    _count: QrCodeCountAggregateOutputType | null
    _min: QrCodeMinAggregateOutputType | null
    _max: QrCodeMaxAggregateOutputType | null
  }

  type GetQrCodeGroupByPayload<T extends QrCodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QrCodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QrCodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QrCodeGroupByOutputType[P]>
            : GetScalarType<T[P], QrCodeGroupByOutputType[P]>
        }
      >
    >


  export type QrCodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vendorId?: boolean
    uniqueKey?: boolean
    qrUrl?: boolean
    qrImageData?: boolean
    generatedAt?: boolean
    isActive?: boolean
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["qrCode"]>



  export type QrCodeSelectScalar = {
    id?: boolean
    vendorId?: boolean
    uniqueKey?: boolean
    qrUrl?: boolean
    qrImageData?: boolean
    generatedAt?: boolean
    isActive?: boolean
  }

  export type QrCodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vendorId" | "uniqueKey" | "qrUrl" | "qrImageData" | "generatedAt" | "isActive", ExtArgs["result"]["qrCode"]>
  export type QrCodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }

  export type $QrCodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QrCode"
    objects: {
      vendor: Prisma.$VendorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      vendorId: string
      uniqueKey: string
      qrUrl: string
      qrImageData: string | null
      generatedAt: Date
      isActive: boolean
    }, ExtArgs["result"]["qrCode"]>
    composites: {}
  }

  type QrCodeGetPayload<S extends boolean | null | undefined | QrCodeDefaultArgs> = $Result.GetResult<Prisma.$QrCodePayload, S>

  type QrCodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QrCodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QrCodeCountAggregateInputType | true
    }

  export interface QrCodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QrCode'], meta: { name: 'QrCode' } }
    /**
     * Find zero or one QrCode that matches the filter.
     * @param {QrCodeFindUniqueArgs} args - Arguments to find a QrCode
     * @example
     * // Get one QrCode
     * const qrCode = await prisma.qrCode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QrCodeFindUniqueArgs>(args: SelectSubset<T, QrCodeFindUniqueArgs<ExtArgs>>): Prisma__QrCodeClient<$Result.GetResult<Prisma.$QrCodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QrCode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QrCodeFindUniqueOrThrowArgs} args - Arguments to find a QrCode
     * @example
     * // Get one QrCode
     * const qrCode = await prisma.qrCode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QrCodeFindUniqueOrThrowArgs>(args: SelectSubset<T, QrCodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QrCodeClient<$Result.GetResult<Prisma.$QrCodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QrCode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QrCodeFindFirstArgs} args - Arguments to find a QrCode
     * @example
     * // Get one QrCode
     * const qrCode = await prisma.qrCode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QrCodeFindFirstArgs>(args?: SelectSubset<T, QrCodeFindFirstArgs<ExtArgs>>): Prisma__QrCodeClient<$Result.GetResult<Prisma.$QrCodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QrCode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QrCodeFindFirstOrThrowArgs} args - Arguments to find a QrCode
     * @example
     * // Get one QrCode
     * const qrCode = await prisma.qrCode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QrCodeFindFirstOrThrowArgs>(args?: SelectSubset<T, QrCodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__QrCodeClient<$Result.GetResult<Prisma.$QrCodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QrCodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QrCodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QrCodes
     * const qrCodes = await prisma.qrCode.findMany()
     * 
     * // Get first 10 QrCodes
     * const qrCodes = await prisma.qrCode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const qrCodeWithIdOnly = await prisma.qrCode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QrCodeFindManyArgs>(args?: SelectSubset<T, QrCodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QrCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QrCode.
     * @param {QrCodeCreateArgs} args - Arguments to create a QrCode.
     * @example
     * // Create one QrCode
     * const QrCode = await prisma.qrCode.create({
     *   data: {
     *     // ... data to create a QrCode
     *   }
     * })
     * 
     */
    create<T extends QrCodeCreateArgs>(args: SelectSubset<T, QrCodeCreateArgs<ExtArgs>>): Prisma__QrCodeClient<$Result.GetResult<Prisma.$QrCodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QrCodes.
     * @param {QrCodeCreateManyArgs} args - Arguments to create many QrCodes.
     * @example
     * // Create many QrCodes
     * const qrCode = await prisma.qrCode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QrCodeCreateManyArgs>(args?: SelectSubset<T, QrCodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a QrCode.
     * @param {QrCodeDeleteArgs} args - Arguments to delete one QrCode.
     * @example
     * // Delete one QrCode
     * const QrCode = await prisma.qrCode.delete({
     *   where: {
     *     // ... filter to delete one QrCode
     *   }
     * })
     * 
     */
    delete<T extends QrCodeDeleteArgs>(args: SelectSubset<T, QrCodeDeleteArgs<ExtArgs>>): Prisma__QrCodeClient<$Result.GetResult<Prisma.$QrCodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QrCode.
     * @param {QrCodeUpdateArgs} args - Arguments to update one QrCode.
     * @example
     * // Update one QrCode
     * const qrCode = await prisma.qrCode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QrCodeUpdateArgs>(args: SelectSubset<T, QrCodeUpdateArgs<ExtArgs>>): Prisma__QrCodeClient<$Result.GetResult<Prisma.$QrCodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QrCodes.
     * @param {QrCodeDeleteManyArgs} args - Arguments to filter QrCodes to delete.
     * @example
     * // Delete a few QrCodes
     * const { count } = await prisma.qrCode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QrCodeDeleteManyArgs>(args?: SelectSubset<T, QrCodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QrCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QrCodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QrCodes
     * const qrCode = await prisma.qrCode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QrCodeUpdateManyArgs>(args: SelectSubset<T, QrCodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one QrCode.
     * @param {QrCodeUpsertArgs} args - Arguments to update or create a QrCode.
     * @example
     * // Update or create a QrCode
     * const qrCode = await prisma.qrCode.upsert({
     *   create: {
     *     // ... data to create a QrCode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QrCode we want to update
     *   }
     * })
     */
    upsert<T extends QrCodeUpsertArgs>(args: SelectSubset<T, QrCodeUpsertArgs<ExtArgs>>): Prisma__QrCodeClient<$Result.GetResult<Prisma.$QrCodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QrCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QrCodeCountArgs} args - Arguments to filter QrCodes to count.
     * @example
     * // Count the number of QrCodes
     * const count = await prisma.qrCode.count({
     *   where: {
     *     // ... the filter for the QrCodes we want to count
     *   }
     * })
    **/
    count<T extends QrCodeCountArgs>(
      args?: Subset<T, QrCodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QrCodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QrCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QrCodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QrCodeAggregateArgs>(args: Subset<T, QrCodeAggregateArgs>): Prisma.PrismaPromise<GetQrCodeAggregateType<T>>

    /**
     * Group by QrCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QrCodeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QrCodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QrCodeGroupByArgs['orderBy'] }
        : { orderBy?: QrCodeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QrCodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQrCodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QrCode model
   */
  readonly fields: QrCodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QrCode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QrCodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vendor<T extends VendorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VendorDefaultArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the QrCode model
   */
  interface QrCodeFieldRefs {
    readonly id: FieldRef<"QrCode", 'String'>
    readonly vendorId: FieldRef<"QrCode", 'String'>
    readonly uniqueKey: FieldRef<"QrCode", 'String'>
    readonly qrUrl: FieldRef<"QrCode", 'String'>
    readonly qrImageData: FieldRef<"QrCode", 'String'>
    readonly generatedAt: FieldRef<"QrCode", 'DateTime'>
    readonly isActive: FieldRef<"QrCode", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * QrCode findUnique
   */
  export type QrCodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QrCode
     */
    select?: QrCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QrCode
     */
    omit?: QrCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QrCodeInclude<ExtArgs> | null
    /**
     * Filter, which QrCode to fetch.
     */
    where: QrCodeWhereUniqueInput
  }

  /**
   * QrCode findUniqueOrThrow
   */
  export type QrCodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QrCode
     */
    select?: QrCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QrCode
     */
    omit?: QrCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QrCodeInclude<ExtArgs> | null
    /**
     * Filter, which QrCode to fetch.
     */
    where: QrCodeWhereUniqueInput
  }

  /**
   * QrCode findFirst
   */
  export type QrCodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QrCode
     */
    select?: QrCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QrCode
     */
    omit?: QrCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QrCodeInclude<ExtArgs> | null
    /**
     * Filter, which QrCode to fetch.
     */
    where?: QrCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QrCodes to fetch.
     */
    orderBy?: QrCodeOrderByWithRelationInput | QrCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QrCodes.
     */
    cursor?: QrCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QrCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QrCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QrCodes.
     */
    distinct?: QrCodeScalarFieldEnum | QrCodeScalarFieldEnum[]
  }

  /**
   * QrCode findFirstOrThrow
   */
  export type QrCodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QrCode
     */
    select?: QrCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QrCode
     */
    omit?: QrCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QrCodeInclude<ExtArgs> | null
    /**
     * Filter, which QrCode to fetch.
     */
    where?: QrCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QrCodes to fetch.
     */
    orderBy?: QrCodeOrderByWithRelationInput | QrCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QrCodes.
     */
    cursor?: QrCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QrCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QrCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QrCodes.
     */
    distinct?: QrCodeScalarFieldEnum | QrCodeScalarFieldEnum[]
  }

  /**
   * QrCode findMany
   */
  export type QrCodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QrCode
     */
    select?: QrCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QrCode
     */
    omit?: QrCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QrCodeInclude<ExtArgs> | null
    /**
     * Filter, which QrCodes to fetch.
     */
    where?: QrCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QrCodes to fetch.
     */
    orderBy?: QrCodeOrderByWithRelationInput | QrCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QrCodes.
     */
    cursor?: QrCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QrCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QrCodes.
     */
    skip?: number
    distinct?: QrCodeScalarFieldEnum | QrCodeScalarFieldEnum[]
  }

  /**
   * QrCode create
   */
  export type QrCodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QrCode
     */
    select?: QrCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QrCode
     */
    omit?: QrCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QrCodeInclude<ExtArgs> | null
    /**
     * The data needed to create a QrCode.
     */
    data: XOR<QrCodeCreateInput, QrCodeUncheckedCreateInput>
  }

  /**
   * QrCode createMany
   */
  export type QrCodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QrCodes.
     */
    data: QrCodeCreateManyInput | QrCodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QrCode update
   */
  export type QrCodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QrCode
     */
    select?: QrCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QrCode
     */
    omit?: QrCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QrCodeInclude<ExtArgs> | null
    /**
     * The data needed to update a QrCode.
     */
    data: XOR<QrCodeUpdateInput, QrCodeUncheckedUpdateInput>
    /**
     * Choose, which QrCode to update.
     */
    where: QrCodeWhereUniqueInput
  }

  /**
   * QrCode updateMany
   */
  export type QrCodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QrCodes.
     */
    data: XOR<QrCodeUpdateManyMutationInput, QrCodeUncheckedUpdateManyInput>
    /**
     * Filter which QrCodes to update
     */
    where?: QrCodeWhereInput
    /**
     * Limit how many QrCodes to update.
     */
    limit?: number
  }

  /**
   * QrCode upsert
   */
  export type QrCodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QrCode
     */
    select?: QrCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QrCode
     */
    omit?: QrCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QrCodeInclude<ExtArgs> | null
    /**
     * The filter to search for the QrCode to update in case it exists.
     */
    where: QrCodeWhereUniqueInput
    /**
     * In case the QrCode found by the `where` argument doesn't exist, create a new QrCode with this data.
     */
    create: XOR<QrCodeCreateInput, QrCodeUncheckedCreateInput>
    /**
     * In case the QrCode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QrCodeUpdateInput, QrCodeUncheckedUpdateInput>
  }

  /**
   * QrCode delete
   */
  export type QrCodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QrCode
     */
    select?: QrCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QrCode
     */
    omit?: QrCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QrCodeInclude<ExtArgs> | null
    /**
     * Filter which QrCode to delete.
     */
    where: QrCodeWhereUniqueInput
  }

  /**
   * QrCode deleteMany
   */
  export type QrCodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QrCodes to delete
     */
    where?: QrCodeWhereInput
    /**
     * Limit how many QrCodes to delete.
     */
    limit?: number
  }

  /**
   * QrCode without action
   */
  export type QrCodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QrCode
     */
    select?: QrCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QrCode
     */
    omit?: QrCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QrCodeInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    title: string | null
    message: string | null
    type: string | null
    targetType: string | null
    createdAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    title: string | null
    message: string | null
    type: string | null
    targetType: string | null
    createdAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    title: number
    message: number
    type: number
    targetType: number
    createdAt: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    title?: true
    message?: true
    type?: true
    targetType?: true
    createdAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    title?: true
    message?: true
    type?: true
    targetType?: true
    createdAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    title?: true
    message?: true
    type?: true
    targetType?: true
    createdAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    title: string
    message: string
    type: string
    targetType: string
    createdAt: Date
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    message?: boolean
    type?: boolean
    targetType?: boolean
    createdAt?: boolean
    vendorNotifications?: boolean | Notification$vendorNotificationsArgs<ExtArgs>
    delegueNotifications?: boolean | Notification$delegueNotificationsArgs<ExtArgs>
    _count?: boolean | NotificationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>



  export type NotificationSelectScalar = {
    id?: boolean
    title?: boolean
    message?: boolean
    type?: boolean
    targetType?: boolean
    createdAt?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "message" | "type" | "targetType" | "createdAt", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendorNotifications?: boolean | Notification$vendorNotificationsArgs<ExtArgs>
    delegueNotifications?: boolean | Notification$delegueNotificationsArgs<ExtArgs>
    _count?: boolean | NotificationCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      vendorNotifications: Prisma.$VendorNotificationPayload<ExtArgs>[]
      delegueNotifications: Prisma.$DelegueNotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      message: string
      type: string
      targetType: string
      createdAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vendorNotifications<T extends Notification$vendorNotificationsArgs<ExtArgs> = {}>(args?: Subset<T, Notification$vendorNotificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendorNotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    delegueNotifications<T extends Notification$delegueNotificationsArgs<ExtArgs> = {}>(args?: Subset<T, Notification$delegueNotificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DelegueNotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly title: FieldRef<"Notification", 'String'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly type: FieldRef<"Notification", 'String'>
    readonly targetType: FieldRef<"Notification", 'String'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification.vendorNotifications
   */
  export type Notification$vendorNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorNotification
     */
    select?: VendorNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorNotification
     */
    omit?: VendorNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorNotificationInclude<ExtArgs> | null
    where?: VendorNotificationWhereInput
    orderBy?: VendorNotificationOrderByWithRelationInput | VendorNotificationOrderByWithRelationInput[]
    cursor?: VendorNotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VendorNotificationScalarFieldEnum | VendorNotificationScalarFieldEnum[]
  }

  /**
   * Notification.delegueNotifications
   */
  export type Notification$delegueNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DelegueNotification
     */
    select?: DelegueNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DelegueNotification
     */
    omit?: DelegueNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DelegueNotificationInclude<ExtArgs> | null
    where?: DelegueNotificationWhereInput
    orderBy?: DelegueNotificationOrderByWithRelationInput | DelegueNotificationOrderByWithRelationInput[]
    cursor?: DelegueNotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DelegueNotificationScalarFieldEnum | DelegueNotificationScalarFieldEnum[]
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Model VendorNotification
   */

  export type AggregateVendorNotification = {
    _count: VendorNotificationCountAggregateOutputType | null
    _min: VendorNotificationMinAggregateOutputType | null
    _max: VendorNotificationMaxAggregateOutputType | null
  }

  export type VendorNotificationMinAggregateOutputType = {
    id: string | null
    notificationId: string | null
    vendorId: string | null
    isRead: boolean | null
    readAt: Date | null
  }

  export type VendorNotificationMaxAggregateOutputType = {
    id: string | null
    notificationId: string | null
    vendorId: string | null
    isRead: boolean | null
    readAt: Date | null
  }

  export type VendorNotificationCountAggregateOutputType = {
    id: number
    notificationId: number
    vendorId: number
    isRead: number
    readAt: number
    _all: number
  }


  export type VendorNotificationMinAggregateInputType = {
    id?: true
    notificationId?: true
    vendorId?: true
    isRead?: true
    readAt?: true
  }

  export type VendorNotificationMaxAggregateInputType = {
    id?: true
    notificationId?: true
    vendorId?: true
    isRead?: true
    readAt?: true
  }

  export type VendorNotificationCountAggregateInputType = {
    id?: true
    notificationId?: true
    vendorId?: true
    isRead?: true
    readAt?: true
    _all?: true
  }

  export type VendorNotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VendorNotification to aggregate.
     */
    where?: VendorNotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VendorNotifications to fetch.
     */
    orderBy?: VendorNotificationOrderByWithRelationInput | VendorNotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VendorNotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VendorNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VendorNotifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VendorNotifications
    **/
    _count?: true | VendorNotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VendorNotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VendorNotificationMaxAggregateInputType
  }

  export type GetVendorNotificationAggregateType<T extends VendorNotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateVendorNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVendorNotification[P]>
      : GetScalarType<T[P], AggregateVendorNotification[P]>
  }




  export type VendorNotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VendorNotificationWhereInput
    orderBy?: VendorNotificationOrderByWithAggregationInput | VendorNotificationOrderByWithAggregationInput[]
    by: VendorNotificationScalarFieldEnum[] | VendorNotificationScalarFieldEnum
    having?: VendorNotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VendorNotificationCountAggregateInputType | true
    _min?: VendorNotificationMinAggregateInputType
    _max?: VendorNotificationMaxAggregateInputType
  }

  export type VendorNotificationGroupByOutputType = {
    id: string
    notificationId: string
    vendorId: string
    isRead: boolean
    readAt: Date | null
    _count: VendorNotificationCountAggregateOutputType | null
    _min: VendorNotificationMinAggregateOutputType | null
    _max: VendorNotificationMaxAggregateOutputType | null
  }

  type GetVendorNotificationGroupByPayload<T extends VendorNotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VendorNotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VendorNotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VendorNotificationGroupByOutputType[P]>
            : GetScalarType<T[P], VendorNotificationGroupByOutputType[P]>
        }
      >
    >


  export type VendorNotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    notificationId?: boolean
    vendorId?: boolean
    isRead?: boolean
    readAt?: boolean
    notification?: boolean | NotificationDefaultArgs<ExtArgs>
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vendorNotification"]>



  export type VendorNotificationSelectScalar = {
    id?: boolean
    notificationId?: boolean
    vendorId?: boolean
    isRead?: boolean
    readAt?: boolean
  }

  export type VendorNotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "notificationId" | "vendorId" | "isRead" | "readAt", ExtArgs["result"]["vendorNotification"]>
  export type VendorNotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notification?: boolean | NotificationDefaultArgs<ExtArgs>
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }

  export type $VendorNotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VendorNotification"
    objects: {
      notification: Prisma.$NotificationPayload<ExtArgs>
      vendor: Prisma.$VendorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      notificationId: string
      vendorId: string
      isRead: boolean
      readAt: Date | null
    }, ExtArgs["result"]["vendorNotification"]>
    composites: {}
  }

  type VendorNotificationGetPayload<S extends boolean | null | undefined | VendorNotificationDefaultArgs> = $Result.GetResult<Prisma.$VendorNotificationPayload, S>

  type VendorNotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VendorNotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VendorNotificationCountAggregateInputType | true
    }

  export interface VendorNotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VendorNotification'], meta: { name: 'VendorNotification' } }
    /**
     * Find zero or one VendorNotification that matches the filter.
     * @param {VendorNotificationFindUniqueArgs} args - Arguments to find a VendorNotification
     * @example
     * // Get one VendorNotification
     * const vendorNotification = await prisma.vendorNotification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VendorNotificationFindUniqueArgs>(args: SelectSubset<T, VendorNotificationFindUniqueArgs<ExtArgs>>): Prisma__VendorNotificationClient<$Result.GetResult<Prisma.$VendorNotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VendorNotification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VendorNotificationFindUniqueOrThrowArgs} args - Arguments to find a VendorNotification
     * @example
     * // Get one VendorNotification
     * const vendorNotification = await prisma.vendorNotification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VendorNotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, VendorNotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VendorNotificationClient<$Result.GetResult<Prisma.$VendorNotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VendorNotification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorNotificationFindFirstArgs} args - Arguments to find a VendorNotification
     * @example
     * // Get one VendorNotification
     * const vendorNotification = await prisma.vendorNotification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VendorNotificationFindFirstArgs>(args?: SelectSubset<T, VendorNotificationFindFirstArgs<ExtArgs>>): Prisma__VendorNotificationClient<$Result.GetResult<Prisma.$VendorNotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VendorNotification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorNotificationFindFirstOrThrowArgs} args - Arguments to find a VendorNotification
     * @example
     * // Get one VendorNotification
     * const vendorNotification = await prisma.vendorNotification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VendorNotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, VendorNotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__VendorNotificationClient<$Result.GetResult<Prisma.$VendorNotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VendorNotifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorNotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VendorNotifications
     * const vendorNotifications = await prisma.vendorNotification.findMany()
     * 
     * // Get first 10 VendorNotifications
     * const vendorNotifications = await prisma.vendorNotification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vendorNotificationWithIdOnly = await prisma.vendorNotification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VendorNotificationFindManyArgs>(args?: SelectSubset<T, VendorNotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendorNotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VendorNotification.
     * @param {VendorNotificationCreateArgs} args - Arguments to create a VendorNotification.
     * @example
     * // Create one VendorNotification
     * const VendorNotification = await prisma.vendorNotification.create({
     *   data: {
     *     // ... data to create a VendorNotification
     *   }
     * })
     * 
     */
    create<T extends VendorNotificationCreateArgs>(args: SelectSubset<T, VendorNotificationCreateArgs<ExtArgs>>): Prisma__VendorNotificationClient<$Result.GetResult<Prisma.$VendorNotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VendorNotifications.
     * @param {VendorNotificationCreateManyArgs} args - Arguments to create many VendorNotifications.
     * @example
     * // Create many VendorNotifications
     * const vendorNotification = await prisma.vendorNotification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VendorNotificationCreateManyArgs>(args?: SelectSubset<T, VendorNotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VendorNotification.
     * @param {VendorNotificationDeleteArgs} args - Arguments to delete one VendorNotification.
     * @example
     * // Delete one VendorNotification
     * const VendorNotification = await prisma.vendorNotification.delete({
     *   where: {
     *     // ... filter to delete one VendorNotification
     *   }
     * })
     * 
     */
    delete<T extends VendorNotificationDeleteArgs>(args: SelectSubset<T, VendorNotificationDeleteArgs<ExtArgs>>): Prisma__VendorNotificationClient<$Result.GetResult<Prisma.$VendorNotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VendorNotification.
     * @param {VendorNotificationUpdateArgs} args - Arguments to update one VendorNotification.
     * @example
     * // Update one VendorNotification
     * const vendorNotification = await prisma.vendorNotification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VendorNotificationUpdateArgs>(args: SelectSubset<T, VendorNotificationUpdateArgs<ExtArgs>>): Prisma__VendorNotificationClient<$Result.GetResult<Prisma.$VendorNotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VendorNotifications.
     * @param {VendorNotificationDeleteManyArgs} args - Arguments to filter VendorNotifications to delete.
     * @example
     * // Delete a few VendorNotifications
     * const { count } = await prisma.vendorNotification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VendorNotificationDeleteManyArgs>(args?: SelectSubset<T, VendorNotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VendorNotifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorNotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VendorNotifications
     * const vendorNotification = await prisma.vendorNotification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VendorNotificationUpdateManyArgs>(args: SelectSubset<T, VendorNotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VendorNotification.
     * @param {VendorNotificationUpsertArgs} args - Arguments to update or create a VendorNotification.
     * @example
     * // Update or create a VendorNotification
     * const vendorNotification = await prisma.vendorNotification.upsert({
     *   create: {
     *     // ... data to create a VendorNotification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VendorNotification we want to update
     *   }
     * })
     */
    upsert<T extends VendorNotificationUpsertArgs>(args: SelectSubset<T, VendorNotificationUpsertArgs<ExtArgs>>): Prisma__VendorNotificationClient<$Result.GetResult<Prisma.$VendorNotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VendorNotifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorNotificationCountArgs} args - Arguments to filter VendorNotifications to count.
     * @example
     * // Count the number of VendorNotifications
     * const count = await prisma.vendorNotification.count({
     *   where: {
     *     // ... the filter for the VendorNotifications we want to count
     *   }
     * })
    **/
    count<T extends VendorNotificationCountArgs>(
      args?: Subset<T, VendorNotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VendorNotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VendorNotification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorNotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VendorNotificationAggregateArgs>(args: Subset<T, VendorNotificationAggregateArgs>): Prisma.PrismaPromise<GetVendorNotificationAggregateType<T>>

    /**
     * Group by VendorNotification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorNotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VendorNotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VendorNotificationGroupByArgs['orderBy'] }
        : { orderBy?: VendorNotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VendorNotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVendorNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VendorNotification model
   */
  readonly fields: VendorNotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VendorNotification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VendorNotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    notification<T extends NotificationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NotificationDefaultArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vendor<T extends VendorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VendorDefaultArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VendorNotification model
   */
  interface VendorNotificationFieldRefs {
    readonly id: FieldRef<"VendorNotification", 'String'>
    readonly notificationId: FieldRef<"VendorNotification", 'String'>
    readonly vendorId: FieldRef<"VendorNotification", 'String'>
    readonly isRead: FieldRef<"VendorNotification", 'Boolean'>
    readonly readAt: FieldRef<"VendorNotification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VendorNotification findUnique
   */
  export type VendorNotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorNotification
     */
    select?: VendorNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorNotification
     */
    omit?: VendorNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorNotificationInclude<ExtArgs> | null
    /**
     * Filter, which VendorNotification to fetch.
     */
    where: VendorNotificationWhereUniqueInput
  }

  /**
   * VendorNotification findUniqueOrThrow
   */
  export type VendorNotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorNotification
     */
    select?: VendorNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorNotification
     */
    omit?: VendorNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorNotificationInclude<ExtArgs> | null
    /**
     * Filter, which VendorNotification to fetch.
     */
    where: VendorNotificationWhereUniqueInput
  }

  /**
   * VendorNotification findFirst
   */
  export type VendorNotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorNotification
     */
    select?: VendorNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorNotification
     */
    omit?: VendorNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorNotificationInclude<ExtArgs> | null
    /**
     * Filter, which VendorNotification to fetch.
     */
    where?: VendorNotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VendorNotifications to fetch.
     */
    orderBy?: VendorNotificationOrderByWithRelationInput | VendorNotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VendorNotifications.
     */
    cursor?: VendorNotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VendorNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VendorNotifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VendorNotifications.
     */
    distinct?: VendorNotificationScalarFieldEnum | VendorNotificationScalarFieldEnum[]
  }

  /**
   * VendorNotification findFirstOrThrow
   */
  export type VendorNotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorNotification
     */
    select?: VendorNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorNotification
     */
    omit?: VendorNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorNotificationInclude<ExtArgs> | null
    /**
     * Filter, which VendorNotification to fetch.
     */
    where?: VendorNotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VendorNotifications to fetch.
     */
    orderBy?: VendorNotificationOrderByWithRelationInput | VendorNotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VendorNotifications.
     */
    cursor?: VendorNotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VendorNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VendorNotifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VendorNotifications.
     */
    distinct?: VendorNotificationScalarFieldEnum | VendorNotificationScalarFieldEnum[]
  }

  /**
   * VendorNotification findMany
   */
  export type VendorNotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorNotification
     */
    select?: VendorNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorNotification
     */
    omit?: VendorNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorNotificationInclude<ExtArgs> | null
    /**
     * Filter, which VendorNotifications to fetch.
     */
    where?: VendorNotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VendorNotifications to fetch.
     */
    orderBy?: VendorNotificationOrderByWithRelationInput | VendorNotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VendorNotifications.
     */
    cursor?: VendorNotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VendorNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VendorNotifications.
     */
    skip?: number
    distinct?: VendorNotificationScalarFieldEnum | VendorNotificationScalarFieldEnum[]
  }

  /**
   * VendorNotification create
   */
  export type VendorNotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorNotification
     */
    select?: VendorNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorNotification
     */
    omit?: VendorNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorNotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a VendorNotification.
     */
    data: XOR<VendorNotificationCreateInput, VendorNotificationUncheckedCreateInput>
  }

  /**
   * VendorNotification createMany
   */
  export type VendorNotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VendorNotifications.
     */
    data: VendorNotificationCreateManyInput | VendorNotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VendorNotification update
   */
  export type VendorNotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorNotification
     */
    select?: VendorNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorNotification
     */
    omit?: VendorNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorNotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a VendorNotification.
     */
    data: XOR<VendorNotificationUpdateInput, VendorNotificationUncheckedUpdateInput>
    /**
     * Choose, which VendorNotification to update.
     */
    where: VendorNotificationWhereUniqueInput
  }

  /**
   * VendorNotification updateMany
   */
  export type VendorNotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VendorNotifications.
     */
    data: XOR<VendorNotificationUpdateManyMutationInput, VendorNotificationUncheckedUpdateManyInput>
    /**
     * Filter which VendorNotifications to update
     */
    where?: VendorNotificationWhereInput
    /**
     * Limit how many VendorNotifications to update.
     */
    limit?: number
  }

  /**
   * VendorNotification upsert
   */
  export type VendorNotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorNotification
     */
    select?: VendorNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorNotification
     */
    omit?: VendorNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorNotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the VendorNotification to update in case it exists.
     */
    where: VendorNotificationWhereUniqueInput
    /**
     * In case the VendorNotification found by the `where` argument doesn't exist, create a new VendorNotification with this data.
     */
    create: XOR<VendorNotificationCreateInput, VendorNotificationUncheckedCreateInput>
    /**
     * In case the VendorNotification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VendorNotificationUpdateInput, VendorNotificationUncheckedUpdateInput>
  }

  /**
   * VendorNotification delete
   */
  export type VendorNotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorNotification
     */
    select?: VendorNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorNotification
     */
    omit?: VendorNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorNotificationInclude<ExtArgs> | null
    /**
     * Filter which VendorNotification to delete.
     */
    where: VendorNotificationWhereUniqueInput
  }

  /**
   * VendorNotification deleteMany
   */
  export type VendorNotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VendorNotifications to delete
     */
    where?: VendorNotificationWhereInput
    /**
     * Limit how many VendorNotifications to delete.
     */
    limit?: number
  }

  /**
   * VendorNotification without action
   */
  export type VendorNotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorNotification
     */
    select?: VendorNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VendorNotification
     */
    omit?: VendorNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorNotificationInclude<ExtArgs> | null
  }


  /**
   * Model DelegueNotification
   */

  export type AggregateDelegueNotification = {
    _count: DelegueNotificationCountAggregateOutputType | null
    _min: DelegueNotificationMinAggregateOutputType | null
    _max: DelegueNotificationMaxAggregateOutputType | null
  }

  export type DelegueNotificationMinAggregateOutputType = {
    id: string | null
    notificationId: string | null
    delegueId: string | null
    isRead: boolean | null
    readAt: Date | null
  }

  export type DelegueNotificationMaxAggregateOutputType = {
    id: string | null
    notificationId: string | null
    delegueId: string | null
    isRead: boolean | null
    readAt: Date | null
  }

  export type DelegueNotificationCountAggregateOutputType = {
    id: number
    notificationId: number
    delegueId: number
    isRead: number
    readAt: number
    _all: number
  }


  export type DelegueNotificationMinAggregateInputType = {
    id?: true
    notificationId?: true
    delegueId?: true
    isRead?: true
    readAt?: true
  }

  export type DelegueNotificationMaxAggregateInputType = {
    id?: true
    notificationId?: true
    delegueId?: true
    isRead?: true
    readAt?: true
  }

  export type DelegueNotificationCountAggregateInputType = {
    id?: true
    notificationId?: true
    delegueId?: true
    isRead?: true
    readAt?: true
    _all?: true
  }

  export type DelegueNotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DelegueNotification to aggregate.
     */
    where?: DelegueNotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DelegueNotifications to fetch.
     */
    orderBy?: DelegueNotificationOrderByWithRelationInput | DelegueNotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DelegueNotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DelegueNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DelegueNotifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DelegueNotifications
    **/
    _count?: true | DelegueNotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DelegueNotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DelegueNotificationMaxAggregateInputType
  }

  export type GetDelegueNotificationAggregateType<T extends DelegueNotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateDelegueNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDelegueNotification[P]>
      : GetScalarType<T[P], AggregateDelegueNotification[P]>
  }




  export type DelegueNotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DelegueNotificationWhereInput
    orderBy?: DelegueNotificationOrderByWithAggregationInput | DelegueNotificationOrderByWithAggregationInput[]
    by: DelegueNotificationScalarFieldEnum[] | DelegueNotificationScalarFieldEnum
    having?: DelegueNotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DelegueNotificationCountAggregateInputType | true
    _min?: DelegueNotificationMinAggregateInputType
    _max?: DelegueNotificationMaxAggregateInputType
  }

  export type DelegueNotificationGroupByOutputType = {
    id: string
    notificationId: string
    delegueId: string
    isRead: boolean
    readAt: Date | null
    _count: DelegueNotificationCountAggregateOutputType | null
    _min: DelegueNotificationMinAggregateOutputType | null
    _max: DelegueNotificationMaxAggregateOutputType | null
  }

  type GetDelegueNotificationGroupByPayload<T extends DelegueNotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DelegueNotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DelegueNotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DelegueNotificationGroupByOutputType[P]>
            : GetScalarType<T[P], DelegueNotificationGroupByOutputType[P]>
        }
      >
    >


  export type DelegueNotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    notificationId?: boolean
    delegueId?: boolean
    isRead?: boolean
    readAt?: boolean
    notification?: boolean | NotificationDefaultArgs<ExtArgs>
    delegue?: boolean | DelegueDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["delegueNotification"]>



  export type DelegueNotificationSelectScalar = {
    id?: boolean
    notificationId?: boolean
    delegueId?: boolean
    isRead?: boolean
    readAt?: boolean
  }

  export type DelegueNotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "notificationId" | "delegueId" | "isRead" | "readAt", ExtArgs["result"]["delegueNotification"]>
  export type DelegueNotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notification?: boolean | NotificationDefaultArgs<ExtArgs>
    delegue?: boolean | DelegueDefaultArgs<ExtArgs>
  }

  export type $DelegueNotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DelegueNotification"
    objects: {
      notification: Prisma.$NotificationPayload<ExtArgs>
      delegue: Prisma.$DeleguePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      notificationId: string
      delegueId: string
      isRead: boolean
      readAt: Date | null
    }, ExtArgs["result"]["delegueNotification"]>
    composites: {}
  }

  type DelegueNotificationGetPayload<S extends boolean | null | undefined | DelegueNotificationDefaultArgs> = $Result.GetResult<Prisma.$DelegueNotificationPayload, S>

  type DelegueNotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DelegueNotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DelegueNotificationCountAggregateInputType | true
    }

  export interface DelegueNotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DelegueNotification'], meta: { name: 'DelegueNotification' } }
    /**
     * Find zero or one DelegueNotification that matches the filter.
     * @param {DelegueNotificationFindUniqueArgs} args - Arguments to find a DelegueNotification
     * @example
     * // Get one DelegueNotification
     * const delegueNotification = await prisma.delegueNotification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DelegueNotificationFindUniqueArgs>(args: SelectSubset<T, DelegueNotificationFindUniqueArgs<ExtArgs>>): Prisma__DelegueNotificationClient<$Result.GetResult<Prisma.$DelegueNotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DelegueNotification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DelegueNotificationFindUniqueOrThrowArgs} args - Arguments to find a DelegueNotification
     * @example
     * // Get one DelegueNotification
     * const delegueNotification = await prisma.delegueNotification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DelegueNotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, DelegueNotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DelegueNotificationClient<$Result.GetResult<Prisma.$DelegueNotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DelegueNotification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DelegueNotificationFindFirstArgs} args - Arguments to find a DelegueNotification
     * @example
     * // Get one DelegueNotification
     * const delegueNotification = await prisma.delegueNotification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DelegueNotificationFindFirstArgs>(args?: SelectSubset<T, DelegueNotificationFindFirstArgs<ExtArgs>>): Prisma__DelegueNotificationClient<$Result.GetResult<Prisma.$DelegueNotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DelegueNotification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DelegueNotificationFindFirstOrThrowArgs} args - Arguments to find a DelegueNotification
     * @example
     * // Get one DelegueNotification
     * const delegueNotification = await prisma.delegueNotification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DelegueNotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, DelegueNotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__DelegueNotificationClient<$Result.GetResult<Prisma.$DelegueNotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DelegueNotifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DelegueNotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DelegueNotifications
     * const delegueNotifications = await prisma.delegueNotification.findMany()
     * 
     * // Get first 10 DelegueNotifications
     * const delegueNotifications = await prisma.delegueNotification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const delegueNotificationWithIdOnly = await prisma.delegueNotification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DelegueNotificationFindManyArgs>(args?: SelectSubset<T, DelegueNotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DelegueNotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DelegueNotification.
     * @param {DelegueNotificationCreateArgs} args - Arguments to create a DelegueNotification.
     * @example
     * // Create one DelegueNotification
     * const DelegueNotification = await prisma.delegueNotification.create({
     *   data: {
     *     // ... data to create a DelegueNotification
     *   }
     * })
     * 
     */
    create<T extends DelegueNotificationCreateArgs>(args: SelectSubset<T, DelegueNotificationCreateArgs<ExtArgs>>): Prisma__DelegueNotificationClient<$Result.GetResult<Prisma.$DelegueNotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DelegueNotifications.
     * @param {DelegueNotificationCreateManyArgs} args - Arguments to create many DelegueNotifications.
     * @example
     * // Create many DelegueNotifications
     * const delegueNotification = await prisma.delegueNotification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DelegueNotificationCreateManyArgs>(args?: SelectSubset<T, DelegueNotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DelegueNotification.
     * @param {DelegueNotificationDeleteArgs} args - Arguments to delete one DelegueNotification.
     * @example
     * // Delete one DelegueNotification
     * const DelegueNotification = await prisma.delegueNotification.delete({
     *   where: {
     *     // ... filter to delete one DelegueNotification
     *   }
     * })
     * 
     */
    delete<T extends DelegueNotificationDeleteArgs>(args: SelectSubset<T, DelegueNotificationDeleteArgs<ExtArgs>>): Prisma__DelegueNotificationClient<$Result.GetResult<Prisma.$DelegueNotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DelegueNotification.
     * @param {DelegueNotificationUpdateArgs} args - Arguments to update one DelegueNotification.
     * @example
     * // Update one DelegueNotification
     * const delegueNotification = await prisma.delegueNotification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DelegueNotificationUpdateArgs>(args: SelectSubset<T, DelegueNotificationUpdateArgs<ExtArgs>>): Prisma__DelegueNotificationClient<$Result.GetResult<Prisma.$DelegueNotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DelegueNotifications.
     * @param {DelegueNotificationDeleteManyArgs} args - Arguments to filter DelegueNotifications to delete.
     * @example
     * // Delete a few DelegueNotifications
     * const { count } = await prisma.delegueNotification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DelegueNotificationDeleteManyArgs>(args?: SelectSubset<T, DelegueNotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DelegueNotifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DelegueNotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DelegueNotifications
     * const delegueNotification = await prisma.delegueNotification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DelegueNotificationUpdateManyArgs>(args: SelectSubset<T, DelegueNotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DelegueNotification.
     * @param {DelegueNotificationUpsertArgs} args - Arguments to update or create a DelegueNotification.
     * @example
     * // Update or create a DelegueNotification
     * const delegueNotification = await prisma.delegueNotification.upsert({
     *   create: {
     *     // ... data to create a DelegueNotification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DelegueNotification we want to update
     *   }
     * })
     */
    upsert<T extends DelegueNotificationUpsertArgs>(args: SelectSubset<T, DelegueNotificationUpsertArgs<ExtArgs>>): Prisma__DelegueNotificationClient<$Result.GetResult<Prisma.$DelegueNotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DelegueNotifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DelegueNotificationCountArgs} args - Arguments to filter DelegueNotifications to count.
     * @example
     * // Count the number of DelegueNotifications
     * const count = await prisma.delegueNotification.count({
     *   where: {
     *     // ... the filter for the DelegueNotifications we want to count
     *   }
     * })
    **/
    count<T extends DelegueNotificationCountArgs>(
      args?: Subset<T, DelegueNotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DelegueNotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DelegueNotification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DelegueNotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DelegueNotificationAggregateArgs>(args: Subset<T, DelegueNotificationAggregateArgs>): Prisma.PrismaPromise<GetDelegueNotificationAggregateType<T>>

    /**
     * Group by DelegueNotification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DelegueNotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DelegueNotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DelegueNotificationGroupByArgs['orderBy'] }
        : { orderBy?: DelegueNotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DelegueNotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDelegueNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DelegueNotification model
   */
  readonly fields: DelegueNotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DelegueNotification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DelegueNotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    notification<T extends NotificationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NotificationDefaultArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    delegue<T extends DelegueDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DelegueDefaultArgs<ExtArgs>>): Prisma__DelegueClient<$Result.GetResult<Prisma.$DeleguePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DelegueNotification model
   */
  interface DelegueNotificationFieldRefs {
    readonly id: FieldRef<"DelegueNotification", 'String'>
    readonly notificationId: FieldRef<"DelegueNotification", 'String'>
    readonly delegueId: FieldRef<"DelegueNotification", 'String'>
    readonly isRead: FieldRef<"DelegueNotification", 'Boolean'>
    readonly readAt: FieldRef<"DelegueNotification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DelegueNotification findUnique
   */
  export type DelegueNotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DelegueNotification
     */
    select?: DelegueNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DelegueNotification
     */
    omit?: DelegueNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DelegueNotificationInclude<ExtArgs> | null
    /**
     * Filter, which DelegueNotification to fetch.
     */
    where: DelegueNotificationWhereUniqueInput
  }

  /**
   * DelegueNotification findUniqueOrThrow
   */
  export type DelegueNotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DelegueNotification
     */
    select?: DelegueNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DelegueNotification
     */
    omit?: DelegueNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DelegueNotificationInclude<ExtArgs> | null
    /**
     * Filter, which DelegueNotification to fetch.
     */
    where: DelegueNotificationWhereUniqueInput
  }

  /**
   * DelegueNotification findFirst
   */
  export type DelegueNotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DelegueNotification
     */
    select?: DelegueNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DelegueNotification
     */
    omit?: DelegueNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DelegueNotificationInclude<ExtArgs> | null
    /**
     * Filter, which DelegueNotification to fetch.
     */
    where?: DelegueNotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DelegueNotifications to fetch.
     */
    orderBy?: DelegueNotificationOrderByWithRelationInput | DelegueNotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DelegueNotifications.
     */
    cursor?: DelegueNotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DelegueNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DelegueNotifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DelegueNotifications.
     */
    distinct?: DelegueNotificationScalarFieldEnum | DelegueNotificationScalarFieldEnum[]
  }

  /**
   * DelegueNotification findFirstOrThrow
   */
  export type DelegueNotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DelegueNotification
     */
    select?: DelegueNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DelegueNotification
     */
    omit?: DelegueNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DelegueNotificationInclude<ExtArgs> | null
    /**
     * Filter, which DelegueNotification to fetch.
     */
    where?: DelegueNotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DelegueNotifications to fetch.
     */
    orderBy?: DelegueNotificationOrderByWithRelationInput | DelegueNotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DelegueNotifications.
     */
    cursor?: DelegueNotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DelegueNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DelegueNotifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DelegueNotifications.
     */
    distinct?: DelegueNotificationScalarFieldEnum | DelegueNotificationScalarFieldEnum[]
  }

  /**
   * DelegueNotification findMany
   */
  export type DelegueNotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DelegueNotification
     */
    select?: DelegueNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DelegueNotification
     */
    omit?: DelegueNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DelegueNotificationInclude<ExtArgs> | null
    /**
     * Filter, which DelegueNotifications to fetch.
     */
    where?: DelegueNotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DelegueNotifications to fetch.
     */
    orderBy?: DelegueNotificationOrderByWithRelationInput | DelegueNotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DelegueNotifications.
     */
    cursor?: DelegueNotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DelegueNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DelegueNotifications.
     */
    skip?: number
    distinct?: DelegueNotificationScalarFieldEnum | DelegueNotificationScalarFieldEnum[]
  }

  /**
   * DelegueNotification create
   */
  export type DelegueNotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DelegueNotification
     */
    select?: DelegueNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DelegueNotification
     */
    omit?: DelegueNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DelegueNotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a DelegueNotification.
     */
    data: XOR<DelegueNotificationCreateInput, DelegueNotificationUncheckedCreateInput>
  }

  /**
   * DelegueNotification createMany
   */
  export type DelegueNotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DelegueNotifications.
     */
    data: DelegueNotificationCreateManyInput | DelegueNotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DelegueNotification update
   */
  export type DelegueNotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DelegueNotification
     */
    select?: DelegueNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DelegueNotification
     */
    omit?: DelegueNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DelegueNotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a DelegueNotification.
     */
    data: XOR<DelegueNotificationUpdateInput, DelegueNotificationUncheckedUpdateInput>
    /**
     * Choose, which DelegueNotification to update.
     */
    where: DelegueNotificationWhereUniqueInput
  }

  /**
   * DelegueNotification updateMany
   */
  export type DelegueNotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DelegueNotifications.
     */
    data: XOR<DelegueNotificationUpdateManyMutationInput, DelegueNotificationUncheckedUpdateManyInput>
    /**
     * Filter which DelegueNotifications to update
     */
    where?: DelegueNotificationWhereInput
    /**
     * Limit how many DelegueNotifications to update.
     */
    limit?: number
  }

  /**
   * DelegueNotification upsert
   */
  export type DelegueNotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DelegueNotification
     */
    select?: DelegueNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DelegueNotification
     */
    omit?: DelegueNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DelegueNotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the DelegueNotification to update in case it exists.
     */
    where: DelegueNotificationWhereUniqueInput
    /**
     * In case the DelegueNotification found by the `where` argument doesn't exist, create a new DelegueNotification with this data.
     */
    create: XOR<DelegueNotificationCreateInput, DelegueNotificationUncheckedCreateInput>
    /**
     * In case the DelegueNotification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DelegueNotificationUpdateInput, DelegueNotificationUncheckedUpdateInput>
  }

  /**
   * DelegueNotification delete
   */
  export type DelegueNotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DelegueNotification
     */
    select?: DelegueNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DelegueNotification
     */
    omit?: DelegueNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DelegueNotificationInclude<ExtArgs> | null
    /**
     * Filter which DelegueNotification to delete.
     */
    where: DelegueNotificationWhereUniqueInput
  }

  /**
   * DelegueNotification deleteMany
   */
  export type DelegueNotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DelegueNotifications to delete
     */
    where?: DelegueNotificationWhereInput
    /**
     * Limit how many DelegueNotifications to delete.
     */
    limit?: number
  }

  /**
   * DelegueNotification without action
   */
  export type DelegueNotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DelegueNotification
     */
    select?: DelegueNotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DelegueNotification
     */
    omit?: DelegueNotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DelegueNotificationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AdminUserScalarFieldEnum: {
    id: 'id',
    phone: 'phone',
    passwordHash: 'passwordHash',
    name: 'name',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdminUserScalarFieldEnum = (typeof AdminUserScalarFieldEnum)[keyof typeof AdminUserScalarFieldEnum]


  export const PharmacyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    phone: 'phone',
    region: 'region',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PharmacyScalarFieldEnum = (typeof PharmacyScalarFieldEnum)[keyof typeof PharmacyScalarFieldEnum]


  export const VendorScalarFieldEnum: {
    id: 'id',
    uniqueCardNumber: 'uniqueCardNumber',
    name: 'name',
    email: 'email',
    phone: 'phone',
    ccp: 'ccp',
    ccpKey: 'ccpKey',
    rip: 'rip',
    pharmacyId: 'pharmacyId',
    status: 'status',
    actionDate: 'actionDate',
    registrationBonus: 'registrationBonus',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VendorScalarFieldEnum = (typeof VendorScalarFieldEnum)[keyof typeof VendorScalarFieldEnum]


  export const DelegueScalarFieldEnum: {
    id: 'id',
    uniqueCardNumber: 'uniqueCardNumber',
    name: 'name',
    email: 'email',
    phone: 'phone',
    region: 'region',
    sector: 'sector',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DelegueScalarFieldEnum = (typeof DelegueScalarFieldEnum)[keyof typeof DelegueScalarFieldEnum]


  export const DelegueQrCodeScalarFieldEnum: {
    id: 'id',
    delegueId: 'delegueId',
    uniqueKey: 'uniqueKey',
    qrUrl: 'qrUrl',
    qrImageData: 'qrImageData',
    generatedAt: 'generatedAt',
    isActive: 'isActive'
  };

  export type DelegueQrCodeScalarFieldEnum = (typeof DelegueQrCodeScalarFieldEnum)[keyof typeof DelegueQrCodeScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    indication: 'indication',
    description: 'description',
    argumentKey: 'argumentKey',
    whyItWorks: 'whyItWorks',
    imageUrl: 'imageUrl',
    isActive: 'isActive',
    sortOrder: 'sortOrder',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const SaleScalarFieldEnum: {
    id: 'id',
    vendorId: 'vendorId',
    productId: 'productId',
    productName: 'productName',
    quantity: 'quantity',
    unitPrice: 'unitPrice',
    saleDate: 'saleDate',
    periodId: 'periodId',
    createdAt: 'createdAt'
  };

  export type SaleScalarFieldEnum = (typeof SaleScalarFieldEnum)[keyof typeof SaleScalarFieldEnum]


  export const PaymentPeriodScalarFieldEnum: {
    id: 'id',
    vendorId: 'vendorId',
    periodType: 'periodType',
    startDate: 'startDate',
    endDate: 'endDate',
    totalSales: 'totalSales',
    totalCommission: 'totalCommission',
    status: 'status',
    paidAt: 'paidAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentPeriodScalarFieldEnum = (typeof PaymentPeriodScalarFieldEnum)[keyof typeof PaymentPeriodScalarFieldEnum]


  export const CommissionRuleScalarFieldEnum: {
    id: 'id',
    periodType: 'periodType',
    quantityFrom: 'quantityFrom',
    quantityTo: 'quantityTo',
    commissionPerProduct: 'commissionPerProduct',
    bonusPerProduct: 'bonusPerProduct',
    label: 'label',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CommissionRuleScalarFieldEnum = (typeof CommissionRuleScalarFieldEnum)[keyof typeof CommissionRuleScalarFieldEnum]


  export const QrCodeScalarFieldEnum: {
    id: 'id',
    vendorId: 'vendorId',
    uniqueKey: 'uniqueKey',
    qrUrl: 'qrUrl',
    qrImageData: 'qrImageData',
    generatedAt: 'generatedAt',
    isActive: 'isActive'
  };

  export type QrCodeScalarFieldEnum = (typeof QrCodeScalarFieldEnum)[keyof typeof QrCodeScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    title: 'title',
    message: 'message',
    type: 'type',
    targetType: 'targetType',
    createdAt: 'createdAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const VendorNotificationScalarFieldEnum: {
    id: 'id',
    notificationId: 'notificationId',
    vendorId: 'vendorId',
    isRead: 'isRead',
    readAt: 'readAt'
  };

  export type VendorNotificationScalarFieldEnum = (typeof VendorNotificationScalarFieldEnum)[keyof typeof VendorNotificationScalarFieldEnum]


  export const DelegueNotificationScalarFieldEnum: {
    id: 'id',
    notificationId: 'notificationId',
    delegueId: 'delegueId',
    isRead: 'isRead',
    readAt: 'readAt'
  };

  export type DelegueNotificationScalarFieldEnum = (typeof DelegueNotificationScalarFieldEnum)[keyof typeof DelegueNotificationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const AdminUserOrderByRelevanceFieldEnum: {
    id: 'id',
    phone: 'phone',
    passwordHash: 'passwordHash',
    name: 'name',
    role: 'role'
  };

  export type AdminUserOrderByRelevanceFieldEnum = (typeof AdminUserOrderByRelevanceFieldEnum)[keyof typeof AdminUserOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const PharmacyOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    phone: 'phone',
    region: 'region',
    status: 'status'
  };

  export type PharmacyOrderByRelevanceFieldEnum = (typeof PharmacyOrderByRelevanceFieldEnum)[keyof typeof PharmacyOrderByRelevanceFieldEnum]


  export const VendorOrderByRelevanceFieldEnum: {
    id: 'id',
    uniqueCardNumber: 'uniqueCardNumber',
    name: 'name',
    email: 'email',
    phone: 'phone',
    ccp: 'ccp',
    ccpKey: 'ccpKey',
    rip: 'rip',
    pharmacyId: 'pharmacyId',
    status: 'status'
  };

  export type VendorOrderByRelevanceFieldEnum = (typeof VendorOrderByRelevanceFieldEnum)[keyof typeof VendorOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const DelegueOrderByRelevanceFieldEnum: {
    id: 'id',
    uniqueCardNumber: 'uniqueCardNumber',
    name: 'name',
    email: 'email',
    phone: 'phone',
    sector: 'sector',
    status: 'status'
  };

  export type DelegueOrderByRelevanceFieldEnum = (typeof DelegueOrderByRelevanceFieldEnum)[keyof typeof DelegueOrderByRelevanceFieldEnum]


  export const DelegueQrCodeOrderByRelevanceFieldEnum: {
    id: 'id',
    delegueId: 'delegueId',
    uniqueKey: 'uniqueKey',
    qrUrl: 'qrUrl',
    qrImageData: 'qrImageData'
  };

  export type DelegueQrCodeOrderByRelevanceFieldEnum = (typeof DelegueQrCodeOrderByRelevanceFieldEnum)[keyof typeof DelegueQrCodeOrderByRelevanceFieldEnum]


  export const ProductOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    indication: 'indication',
    description: 'description',
    argumentKey: 'argumentKey',
    whyItWorks: 'whyItWorks',
    imageUrl: 'imageUrl'
  };

  export type ProductOrderByRelevanceFieldEnum = (typeof ProductOrderByRelevanceFieldEnum)[keyof typeof ProductOrderByRelevanceFieldEnum]


  export const SaleOrderByRelevanceFieldEnum: {
    id: 'id',
    vendorId: 'vendorId',
    productId: 'productId',
    productName: 'productName',
    periodId: 'periodId'
  };

  export type SaleOrderByRelevanceFieldEnum = (typeof SaleOrderByRelevanceFieldEnum)[keyof typeof SaleOrderByRelevanceFieldEnum]


  export const PaymentPeriodOrderByRelevanceFieldEnum: {
    id: 'id',
    vendorId: 'vendorId',
    periodType: 'periodType',
    status: 'status'
  };

  export type PaymentPeriodOrderByRelevanceFieldEnum = (typeof PaymentPeriodOrderByRelevanceFieldEnum)[keyof typeof PaymentPeriodOrderByRelevanceFieldEnum]


  export const CommissionRuleOrderByRelevanceFieldEnum: {
    id: 'id',
    periodType: 'periodType',
    label: 'label'
  };

  export type CommissionRuleOrderByRelevanceFieldEnum = (typeof CommissionRuleOrderByRelevanceFieldEnum)[keyof typeof CommissionRuleOrderByRelevanceFieldEnum]


  export const QrCodeOrderByRelevanceFieldEnum: {
    id: 'id',
    vendorId: 'vendorId',
    uniqueKey: 'uniqueKey',
    qrUrl: 'qrUrl',
    qrImageData: 'qrImageData'
  };

  export type QrCodeOrderByRelevanceFieldEnum = (typeof QrCodeOrderByRelevanceFieldEnum)[keyof typeof QrCodeOrderByRelevanceFieldEnum]


  export const NotificationOrderByRelevanceFieldEnum: {
    id: 'id',
    title: 'title',
    message: 'message',
    type: 'type',
    targetType: 'targetType'
  };

  export type NotificationOrderByRelevanceFieldEnum = (typeof NotificationOrderByRelevanceFieldEnum)[keyof typeof NotificationOrderByRelevanceFieldEnum]


  export const VendorNotificationOrderByRelevanceFieldEnum: {
    id: 'id',
    notificationId: 'notificationId',
    vendorId: 'vendorId'
  };

  export type VendorNotificationOrderByRelevanceFieldEnum = (typeof VendorNotificationOrderByRelevanceFieldEnum)[keyof typeof VendorNotificationOrderByRelevanceFieldEnum]


  export const DelegueNotificationOrderByRelevanceFieldEnum: {
    id: 'id',
    notificationId: 'notificationId',
    delegueId: 'delegueId'
  };

  export type DelegueNotificationOrderByRelevanceFieldEnum = (typeof DelegueNotificationOrderByRelevanceFieldEnum)[keyof typeof DelegueNotificationOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type AdminUserWhereInput = {
    AND?: AdminUserWhereInput | AdminUserWhereInput[]
    OR?: AdminUserWhereInput[]
    NOT?: AdminUserWhereInput | AdminUserWhereInput[]
    id?: StringFilter<"AdminUser"> | string
    phone?: StringFilter<"AdminUser"> | string
    passwordHash?: StringFilter<"AdminUser"> | string
    name?: StringFilter<"AdminUser"> | string
    role?: StringFilter<"AdminUser"> | string
    createdAt?: DateTimeFilter<"AdminUser"> | Date | string
    updatedAt?: DateTimeFilter<"AdminUser"> | Date | string
  }

  export type AdminUserOrderByWithRelationInput = {
    id?: SortOrder
    phone?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: AdminUserOrderByRelevanceInput
  }

  export type AdminUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    phone?: string
    AND?: AdminUserWhereInput | AdminUserWhereInput[]
    OR?: AdminUserWhereInput[]
    NOT?: AdminUserWhereInput | AdminUserWhereInput[]
    passwordHash?: StringFilter<"AdminUser"> | string
    name?: StringFilter<"AdminUser"> | string
    role?: StringFilter<"AdminUser"> | string
    createdAt?: DateTimeFilter<"AdminUser"> | Date | string
    updatedAt?: DateTimeFilter<"AdminUser"> | Date | string
  }, "id" | "phone">

  export type AdminUserOrderByWithAggregationInput = {
    id?: SortOrder
    phone?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdminUserCountOrderByAggregateInput
    _max?: AdminUserMaxOrderByAggregateInput
    _min?: AdminUserMinOrderByAggregateInput
  }

  export type AdminUserScalarWhereWithAggregatesInput = {
    AND?: AdminUserScalarWhereWithAggregatesInput | AdminUserScalarWhereWithAggregatesInput[]
    OR?: AdminUserScalarWhereWithAggregatesInput[]
    NOT?: AdminUserScalarWhereWithAggregatesInput | AdminUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AdminUser"> | string
    phone?: StringWithAggregatesFilter<"AdminUser"> | string
    passwordHash?: StringWithAggregatesFilter<"AdminUser"> | string
    name?: StringWithAggregatesFilter<"AdminUser"> | string
    role?: StringWithAggregatesFilter<"AdminUser"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AdminUser"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AdminUser"> | Date | string
  }

  export type PharmacyWhereInput = {
    AND?: PharmacyWhereInput | PharmacyWhereInput[]
    OR?: PharmacyWhereInput[]
    NOT?: PharmacyWhereInput | PharmacyWhereInput[]
    id?: StringFilter<"Pharmacy"> | string
    name?: StringFilter<"Pharmacy"> | string
    address?: StringNullableFilter<"Pharmacy"> | string | null
    phone?: StringNullableFilter<"Pharmacy"> | string | null
    region?: StringNullableFilter<"Pharmacy"> | string | null
    status?: StringFilter<"Pharmacy"> | string
    createdAt?: DateTimeFilter<"Pharmacy"> | Date | string
    updatedAt?: DateTimeFilter<"Pharmacy"> | Date | string
    vendors?: VendorListRelationFilter
  }

  export type PharmacyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vendors?: VendorOrderByRelationAggregateInput
    _relevance?: PharmacyOrderByRelevanceInput
  }

  export type PharmacyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PharmacyWhereInput | PharmacyWhereInput[]
    OR?: PharmacyWhereInput[]
    NOT?: PharmacyWhereInput | PharmacyWhereInput[]
    name?: StringFilter<"Pharmacy"> | string
    address?: StringNullableFilter<"Pharmacy"> | string | null
    phone?: StringNullableFilter<"Pharmacy"> | string | null
    region?: StringNullableFilter<"Pharmacy"> | string | null
    status?: StringFilter<"Pharmacy"> | string
    createdAt?: DateTimeFilter<"Pharmacy"> | Date | string
    updatedAt?: DateTimeFilter<"Pharmacy"> | Date | string
    vendors?: VendorListRelationFilter
  }, "id">

  export type PharmacyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PharmacyCountOrderByAggregateInput
    _max?: PharmacyMaxOrderByAggregateInput
    _min?: PharmacyMinOrderByAggregateInput
  }

  export type PharmacyScalarWhereWithAggregatesInput = {
    AND?: PharmacyScalarWhereWithAggregatesInput | PharmacyScalarWhereWithAggregatesInput[]
    OR?: PharmacyScalarWhereWithAggregatesInput[]
    NOT?: PharmacyScalarWhereWithAggregatesInput | PharmacyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Pharmacy"> | string
    name?: StringWithAggregatesFilter<"Pharmacy"> | string
    address?: StringNullableWithAggregatesFilter<"Pharmacy"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Pharmacy"> | string | null
    region?: StringNullableWithAggregatesFilter<"Pharmacy"> | string | null
    status?: StringWithAggregatesFilter<"Pharmacy"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Pharmacy"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Pharmacy"> | Date | string
  }

  export type VendorWhereInput = {
    AND?: VendorWhereInput | VendorWhereInput[]
    OR?: VendorWhereInput[]
    NOT?: VendorWhereInput | VendorWhereInput[]
    id?: StringFilter<"Vendor"> | string
    uniqueCardNumber?: StringFilter<"Vendor"> | string
    name?: StringNullableFilter<"Vendor"> | string | null
    email?: StringNullableFilter<"Vendor"> | string | null
    phone?: StringNullableFilter<"Vendor"> | string | null
    ccp?: StringNullableFilter<"Vendor"> | string | null
    ccpKey?: StringNullableFilter<"Vendor"> | string | null
    rip?: StringNullableFilter<"Vendor"> | string | null
    pharmacyId?: StringNullableFilter<"Vendor"> | string | null
    status?: StringFilter<"Vendor"> | string
    actionDate?: DateTimeFilter<"Vendor"> | Date | string
    registrationBonus?: BoolFilter<"Vendor"> | boolean
    createdAt?: DateTimeFilter<"Vendor"> | Date | string
    updatedAt?: DateTimeFilter<"Vendor"> | Date | string
    pharmacy?: XOR<PharmacyNullableScalarRelationFilter, PharmacyWhereInput> | null
    sales?: SaleListRelationFilter
    paymentPeriods?: PaymentPeriodListRelationFilter
    qrCodes?: QrCodeListRelationFilter
    notifications?: VendorNotificationListRelationFilter
  }

  export type VendorOrderByWithRelationInput = {
    id?: SortOrder
    uniqueCardNumber?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    ccp?: SortOrderInput | SortOrder
    ccpKey?: SortOrderInput | SortOrder
    rip?: SortOrderInput | SortOrder
    pharmacyId?: SortOrderInput | SortOrder
    status?: SortOrder
    actionDate?: SortOrder
    registrationBonus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pharmacy?: PharmacyOrderByWithRelationInput
    sales?: SaleOrderByRelationAggregateInput
    paymentPeriods?: PaymentPeriodOrderByRelationAggregateInput
    qrCodes?: QrCodeOrderByRelationAggregateInput
    notifications?: VendorNotificationOrderByRelationAggregateInput
    _relevance?: VendorOrderByRelevanceInput
  }

  export type VendorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    uniqueCardNumber?: string
    AND?: VendorWhereInput | VendorWhereInput[]
    OR?: VendorWhereInput[]
    NOT?: VendorWhereInput | VendorWhereInput[]
    name?: StringNullableFilter<"Vendor"> | string | null
    email?: StringNullableFilter<"Vendor"> | string | null
    phone?: StringNullableFilter<"Vendor"> | string | null
    ccp?: StringNullableFilter<"Vendor"> | string | null
    ccpKey?: StringNullableFilter<"Vendor"> | string | null
    rip?: StringNullableFilter<"Vendor"> | string | null
    pharmacyId?: StringNullableFilter<"Vendor"> | string | null
    status?: StringFilter<"Vendor"> | string
    actionDate?: DateTimeFilter<"Vendor"> | Date | string
    registrationBonus?: BoolFilter<"Vendor"> | boolean
    createdAt?: DateTimeFilter<"Vendor"> | Date | string
    updatedAt?: DateTimeFilter<"Vendor"> | Date | string
    pharmacy?: XOR<PharmacyNullableScalarRelationFilter, PharmacyWhereInput> | null
    sales?: SaleListRelationFilter
    paymentPeriods?: PaymentPeriodListRelationFilter
    qrCodes?: QrCodeListRelationFilter
    notifications?: VendorNotificationListRelationFilter
  }, "id" | "uniqueCardNumber">

  export type VendorOrderByWithAggregationInput = {
    id?: SortOrder
    uniqueCardNumber?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    ccp?: SortOrderInput | SortOrder
    ccpKey?: SortOrderInput | SortOrder
    rip?: SortOrderInput | SortOrder
    pharmacyId?: SortOrderInput | SortOrder
    status?: SortOrder
    actionDate?: SortOrder
    registrationBonus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VendorCountOrderByAggregateInput
    _max?: VendorMaxOrderByAggregateInput
    _min?: VendorMinOrderByAggregateInput
  }

  export type VendorScalarWhereWithAggregatesInput = {
    AND?: VendorScalarWhereWithAggregatesInput | VendorScalarWhereWithAggregatesInput[]
    OR?: VendorScalarWhereWithAggregatesInput[]
    NOT?: VendorScalarWhereWithAggregatesInput | VendorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Vendor"> | string
    uniqueCardNumber?: StringWithAggregatesFilter<"Vendor"> | string
    name?: StringNullableWithAggregatesFilter<"Vendor"> | string | null
    email?: StringNullableWithAggregatesFilter<"Vendor"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Vendor"> | string | null
    ccp?: StringNullableWithAggregatesFilter<"Vendor"> | string | null
    ccpKey?: StringNullableWithAggregatesFilter<"Vendor"> | string | null
    rip?: StringNullableWithAggregatesFilter<"Vendor"> | string | null
    pharmacyId?: StringNullableWithAggregatesFilter<"Vendor"> | string | null
    status?: StringWithAggregatesFilter<"Vendor"> | string
    actionDate?: DateTimeWithAggregatesFilter<"Vendor"> | Date | string
    registrationBonus?: BoolWithAggregatesFilter<"Vendor"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Vendor"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Vendor"> | Date | string
  }

  export type DelegueWhereInput = {
    AND?: DelegueWhereInput | DelegueWhereInput[]
    OR?: DelegueWhereInput[]
    NOT?: DelegueWhereInput | DelegueWhereInput[]
    id?: StringFilter<"Delegue"> | string
    uniqueCardNumber?: StringFilter<"Delegue"> | string
    name?: StringFilter<"Delegue"> | string
    email?: StringNullableFilter<"Delegue"> | string | null
    phone?: StringNullableFilter<"Delegue"> | string | null
    region?: JsonFilter<"Delegue">
    sector?: StringNullableFilter<"Delegue"> | string | null
    status?: StringFilter<"Delegue"> | string
    createdAt?: DateTimeFilter<"Delegue"> | Date | string
    updatedAt?: DateTimeFilter<"Delegue"> | Date | string
    qrCodes?: DelegueQrCodeListRelationFilter
    notifications?: DelegueNotificationListRelationFilter
  }

  export type DelegueOrderByWithRelationInput = {
    id?: SortOrder
    uniqueCardNumber?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    region?: SortOrder
    sector?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    qrCodes?: DelegueQrCodeOrderByRelationAggregateInput
    notifications?: DelegueNotificationOrderByRelationAggregateInput
    _relevance?: DelegueOrderByRelevanceInput
  }

  export type DelegueWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    uniqueCardNumber?: string
    AND?: DelegueWhereInput | DelegueWhereInput[]
    OR?: DelegueWhereInput[]
    NOT?: DelegueWhereInput | DelegueWhereInput[]
    name?: StringFilter<"Delegue"> | string
    email?: StringNullableFilter<"Delegue"> | string | null
    phone?: StringNullableFilter<"Delegue"> | string | null
    region?: JsonFilter<"Delegue">
    sector?: StringNullableFilter<"Delegue"> | string | null
    status?: StringFilter<"Delegue"> | string
    createdAt?: DateTimeFilter<"Delegue"> | Date | string
    updatedAt?: DateTimeFilter<"Delegue"> | Date | string
    qrCodes?: DelegueQrCodeListRelationFilter
    notifications?: DelegueNotificationListRelationFilter
  }, "id" | "uniqueCardNumber">

  export type DelegueOrderByWithAggregationInput = {
    id?: SortOrder
    uniqueCardNumber?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    region?: SortOrder
    sector?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DelegueCountOrderByAggregateInput
    _max?: DelegueMaxOrderByAggregateInput
    _min?: DelegueMinOrderByAggregateInput
  }

  export type DelegueScalarWhereWithAggregatesInput = {
    AND?: DelegueScalarWhereWithAggregatesInput | DelegueScalarWhereWithAggregatesInput[]
    OR?: DelegueScalarWhereWithAggregatesInput[]
    NOT?: DelegueScalarWhereWithAggregatesInput | DelegueScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Delegue"> | string
    uniqueCardNumber?: StringWithAggregatesFilter<"Delegue"> | string
    name?: StringWithAggregatesFilter<"Delegue"> | string
    email?: StringNullableWithAggregatesFilter<"Delegue"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Delegue"> | string | null
    region?: JsonWithAggregatesFilter<"Delegue">
    sector?: StringNullableWithAggregatesFilter<"Delegue"> | string | null
    status?: StringWithAggregatesFilter<"Delegue"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Delegue"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Delegue"> | Date | string
  }

  export type DelegueQrCodeWhereInput = {
    AND?: DelegueQrCodeWhereInput | DelegueQrCodeWhereInput[]
    OR?: DelegueQrCodeWhereInput[]
    NOT?: DelegueQrCodeWhereInput | DelegueQrCodeWhereInput[]
    id?: StringFilter<"DelegueQrCode"> | string
    delegueId?: StringFilter<"DelegueQrCode"> | string
    uniqueKey?: StringFilter<"DelegueQrCode"> | string
    qrUrl?: StringFilter<"DelegueQrCode"> | string
    qrImageData?: StringNullableFilter<"DelegueQrCode"> | string | null
    generatedAt?: DateTimeFilter<"DelegueQrCode"> | Date | string
    isActive?: BoolFilter<"DelegueQrCode"> | boolean
    delegue?: XOR<DelegueScalarRelationFilter, DelegueWhereInput>
  }

  export type DelegueQrCodeOrderByWithRelationInput = {
    id?: SortOrder
    delegueId?: SortOrder
    uniqueKey?: SortOrder
    qrUrl?: SortOrder
    qrImageData?: SortOrderInput | SortOrder
    generatedAt?: SortOrder
    isActive?: SortOrder
    delegue?: DelegueOrderByWithRelationInput
    _relevance?: DelegueQrCodeOrderByRelevanceInput
  }

  export type DelegueQrCodeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    uniqueKey?: string
    AND?: DelegueQrCodeWhereInput | DelegueQrCodeWhereInput[]
    OR?: DelegueQrCodeWhereInput[]
    NOT?: DelegueQrCodeWhereInput | DelegueQrCodeWhereInput[]
    delegueId?: StringFilter<"DelegueQrCode"> | string
    qrUrl?: StringFilter<"DelegueQrCode"> | string
    qrImageData?: StringNullableFilter<"DelegueQrCode"> | string | null
    generatedAt?: DateTimeFilter<"DelegueQrCode"> | Date | string
    isActive?: BoolFilter<"DelegueQrCode"> | boolean
    delegue?: XOR<DelegueScalarRelationFilter, DelegueWhereInput>
  }, "id" | "uniqueKey">

  export type DelegueQrCodeOrderByWithAggregationInput = {
    id?: SortOrder
    delegueId?: SortOrder
    uniqueKey?: SortOrder
    qrUrl?: SortOrder
    qrImageData?: SortOrderInput | SortOrder
    generatedAt?: SortOrder
    isActive?: SortOrder
    _count?: DelegueQrCodeCountOrderByAggregateInput
    _max?: DelegueQrCodeMaxOrderByAggregateInput
    _min?: DelegueQrCodeMinOrderByAggregateInput
  }

  export type DelegueQrCodeScalarWhereWithAggregatesInput = {
    AND?: DelegueQrCodeScalarWhereWithAggregatesInput | DelegueQrCodeScalarWhereWithAggregatesInput[]
    OR?: DelegueQrCodeScalarWhereWithAggregatesInput[]
    NOT?: DelegueQrCodeScalarWhereWithAggregatesInput | DelegueQrCodeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DelegueQrCode"> | string
    delegueId?: StringWithAggregatesFilter<"DelegueQrCode"> | string
    uniqueKey?: StringWithAggregatesFilter<"DelegueQrCode"> | string
    qrUrl?: StringWithAggregatesFilter<"DelegueQrCode"> | string
    qrImageData?: StringNullableWithAggregatesFilter<"DelegueQrCode"> | string | null
    generatedAt?: DateTimeWithAggregatesFilter<"DelegueQrCode"> | Date | string
    isActive?: BoolWithAggregatesFilter<"DelegueQrCode"> | boolean
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    slug?: StringFilter<"Product"> | string
    indication?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    argumentKey?: StringNullableFilter<"Product"> | string | null
    whyItWorks?: StringNullableFilter<"Product"> | string | null
    imageUrl?: StringNullableFilter<"Product"> | string | null
    isActive?: BoolFilter<"Product"> | boolean
    sortOrder?: IntFilter<"Product"> | number
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    sales?: SaleListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    indication?: SortOrder
    description?: SortOrderInput | SortOrder
    argumentKey?: SortOrderInput | SortOrder
    whyItWorks?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    isActive?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sales?: SaleOrderByRelationAggregateInput
    _relevance?: ProductOrderByRelevanceInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    slug?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    indication?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    argumentKey?: StringNullableFilter<"Product"> | string | null
    whyItWorks?: StringNullableFilter<"Product"> | string | null
    imageUrl?: StringNullableFilter<"Product"> | string | null
    isActive?: BoolFilter<"Product"> | boolean
    sortOrder?: IntFilter<"Product"> | number
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    sales?: SaleListRelationFilter
  }, "id" | "name" | "slug">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    indication?: SortOrder
    description?: SortOrderInput | SortOrder
    argumentKey?: SortOrderInput | SortOrder
    whyItWorks?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    isActive?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Product"> | string
    name?: StringWithAggregatesFilter<"Product"> | string
    slug?: StringWithAggregatesFilter<"Product"> | string
    indication?: StringWithAggregatesFilter<"Product"> | string
    description?: StringNullableWithAggregatesFilter<"Product"> | string | null
    argumentKey?: StringNullableWithAggregatesFilter<"Product"> | string | null
    whyItWorks?: StringNullableWithAggregatesFilter<"Product"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"Product"> | string | null
    isActive?: BoolWithAggregatesFilter<"Product"> | boolean
    sortOrder?: IntWithAggregatesFilter<"Product"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type SaleWhereInput = {
    AND?: SaleWhereInput | SaleWhereInput[]
    OR?: SaleWhereInput[]
    NOT?: SaleWhereInput | SaleWhereInput[]
    id?: StringFilter<"Sale"> | string
    vendorId?: StringFilter<"Sale"> | string
    productId?: StringNullableFilter<"Sale"> | string | null
    productName?: StringFilter<"Sale"> | string
    quantity?: IntFilter<"Sale"> | number
    unitPrice?: FloatFilter<"Sale"> | number
    saleDate?: DateTimeFilter<"Sale"> | Date | string
    periodId?: StringNullableFilter<"Sale"> | string | null
    createdAt?: DateTimeFilter<"Sale"> | Date | string
    vendor?: XOR<VendorScalarRelationFilter, VendorWhereInput>
    product?: XOR<ProductNullableScalarRelationFilter, ProductWhereInput> | null
    period?: XOR<PaymentPeriodNullableScalarRelationFilter, PaymentPeriodWhereInput> | null
  }

  export type SaleOrderByWithRelationInput = {
    id?: SortOrder
    vendorId?: SortOrder
    productId?: SortOrderInput | SortOrder
    productName?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    saleDate?: SortOrder
    periodId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    vendor?: VendorOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
    period?: PaymentPeriodOrderByWithRelationInput
    _relevance?: SaleOrderByRelevanceInput
  }

  export type SaleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SaleWhereInput | SaleWhereInput[]
    OR?: SaleWhereInput[]
    NOT?: SaleWhereInput | SaleWhereInput[]
    vendorId?: StringFilter<"Sale"> | string
    productId?: StringNullableFilter<"Sale"> | string | null
    productName?: StringFilter<"Sale"> | string
    quantity?: IntFilter<"Sale"> | number
    unitPrice?: FloatFilter<"Sale"> | number
    saleDate?: DateTimeFilter<"Sale"> | Date | string
    periodId?: StringNullableFilter<"Sale"> | string | null
    createdAt?: DateTimeFilter<"Sale"> | Date | string
    vendor?: XOR<VendorScalarRelationFilter, VendorWhereInput>
    product?: XOR<ProductNullableScalarRelationFilter, ProductWhereInput> | null
    period?: XOR<PaymentPeriodNullableScalarRelationFilter, PaymentPeriodWhereInput> | null
  }, "id">

  export type SaleOrderByWithAggregationInput = {
    id?: SortOrder
    vendorId?: SortOrder
    productId?: SortOrderInput | SortOrder
    productName?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    saleDate?: SortOrder
    periodId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: SaleCountOrderByAggregateInput
    _avg?: SaleAvgOrderByAggregateInput
    _max?: SaleMaxOrderByAggregateInput
    _min?: SaleMinOrderByAggregateInput
    _sum?: SaleSumOrderByAggregateInput
  }

  export type SaleScalarWhereWithAggregatesInput = {
    AND?: SaleScalarWhereWithAggregatesInput | SaleScalarWhereWithAggregatesInput[]
    OR?: SaleScalarWhereWithAggregatesInput[]
    NOT?: SaleScalarWhereWithAggregatesInput | SaleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Sale"> | string
    vendorId?: StringWithAggregatesFilter<"Sale"> | string
    productId?: StringNullableWithAggregatesFilter<"Sale"> | string | null
    productName?: StringWithAggregatesFilter<"Sale"> | string
    quantity?: IntWithAggregatesFilter<"Sale"> | number
    unitPrice?: FloatWithAggregatesFilter<"Sale"> | number
    saleDate?: DateTimeWithAggregatesFilter<"Sale"> | Date | string
    periodId?: StringNullableWithAggregatesFilter<"Sale"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Sale"> | Date | string
  }

  export type PaymentPeriodWhereInput = {
    AND?: PaymentPeriodWhereInput | PaymentPeriodWhereInput[]
    OR?: PaymentPeriodWhereInput[]
    NOT?: PaymentPeriodWhereInput | PaymentPeriodWhereInput[]
    id?: StringFilter<"PaymentPeriod"> | string
    vendorId?: StringFilter<"PaymentPeriod"> | string
    periodType?: StringFilter<"PaymentPeriod"> | string
    startDate?: DateTimeFilter<"PaymentPeriod"> | Date | string
    endDate?: DateTimeFilter<"PaymentPeriod"> | Date | string
    totalSales?: IntFilter<"PaymentPeriod"> | number
    totalCommission?: FloatFilter<"PaymentPeriod"> | number
    status?: StringFilter<"PaymentPeriod"> | string
    paidAt?: DateTimeNullableFilter<"PaymentPeriod"> | Date | string | null
    createdAt?: DateTimeFilter<"PaymentPeriod"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentPeriod"> | Date | string
    vendor?: XOR<VendorScalarRelationFilter, VendorWhereInput>
    sales?: SaleListRelationFilter
  }

  export type PaymentPeriodOrderByWithRelationInput = {
    id?: SortOrder
    vendorId?: SortOrder
    periodType?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    totalSales?: SortOrder
    totalCommission?: SortOrder
    status?: SortOrder
    paidAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vendor?: VendorOrderByWithRelationInput
    sales?: SaleOrderByRelationAggregateInput
    _relevance?: PaymentPeriodOrderByRelevanceInput
  }

  export type PaymentPeriodWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PaymentPeriodWhereInput | PaymentPeriodWhereInput[]
    OR?: PaymentPeriodWhereInput[]
    NOT?: PaymentPeriodWhereInput | PaymentPeriodWhereInput[]
    vendorId?: StringFilter<"PaymentPeriod"> | string
    periodType?: StringFilter<"PaymentPeriod"> | string
    startDate?: DateTimeFilter<"PaymentPeriod"> | Date | string
    endDate?: DateTimeFilter<"PaymentPeriod"> | Date | string
    totalSales?: IntFilter<"PaymentPeriod"> | number
    totalCommission?: FloatFilter<"PaymentPeriod"> | number
    status?: StringFilter<"PaymentPeriod"> | string
    paidAt?: DateTimeNullableFilter<"PaymentPeriod"> | Date | string | null
    createdAt?: DateTimeFilter<"PaymentPeriod"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentPeriod"> | Date | string
    vendor?: XOR<VendorScalarRelationFilter, VendorWhereInput>
    sales?: SaleListRelationFilter
  }, "id">

  export type PaymentPeriodOrderByWithAggregationInput = {
    id?: SortOrder
    vendorId?: SortOrder
    periodType?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    totalSales?: SortOrder
    totalCommission?: SortOrder
    status?: SortOrder
    paidAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PaymentPeriodCountOrderByAggregateInput
    _avg?: PaymentPeriodAvgOrderByAggregateInput
    _max?: PaymentPeriodMaxOrderByAggregateInput
    _min?: PaymentPeriodMinOrderByAggregateInput
    _sum?: PaymentPeriodSumOrderByAggregateInput
  }

  export type PaymentPeriodScalarWhereWithAggregatesInput = {
    AND?: PaymentPeriodScalarWhereWithAggregatesInput | PaymentPeriodScalarWhereWithAggregatesInput[]
    OR?: PaymentPeriodScalarWhereWithAggregatesInput[]
    NOT?: PaymentPeriodScalarWhereWithAggregatesInput | PaymentPeriodScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PaymentPeriod"> | string
    vendorId?: StringWithAggregatesFilter<"PaymentPeriod"> | string
    periodType?: StringWithAggregatesFilter<"PaymentPeriod"> | string
    startDate?: DateTimeWithAggregatesFilter<"PaymentPeriod"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"PaymentPeriod"> | Date | string
    totalSales?: IntWithAggregatesFilter<"PaymentPeriod"> | number
    totalCommission?: FloatWithAggregatesFilter<"PaymentPeriod"> | number
    status?: StringWithAggregatesFilter<"PaymentPeriod"> | string
    paidAt?: DateTimeNullableWithAggregatesFilter<"PaymentPeriod"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PaymentPeriod"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PaymentPeriod"> | Date | string
  }

  export type CommissionRuleWhereInput = {
    AND?: CommissionRuleWhereInput | CommissionRuleWhereInput[]
    OR?: CommissionRuleWhereInput[]
    NOT?: CommissionRuleWhereInput | CommissionRuleWhereInput[]
    id?: StringFilter<"CommissionRule"> | string
    periodType?: StringFilter<"CommissionRule"> | string
    quantityFrom?: IntFilter<"CommissionRule"> | number
    quantityTo?: IntNullableFilter<"CommissionRule"> | number | null
    commissionPerProduct?: FloatFilter<"CommissionRule"> | number
    bonusPerProduct?: FloatFilter<"CommissionRule"> | number
    label?: StringNullableFilter<"CommissionRule"> | string | null
    isActive?: BoolFilter<"CommissionRule"> | boolean
    createdAt?: DateTimeFilter<"CommissionRule"> | Date | string
    updatedAt?: DateTimeFilter<"CommissionRule"> | Date | string
  }

  export type CommissionRuleOrderByWithRelationInput = {
    id?: SortOrder
    periodType?: SortOrder
    quantityFrom?: SortOrder
    quantityTo?: SortOrderInput | SortOrder
    commissionPerProduct?: SortOrder
    bonusPerProduct?: SortOrder
    label?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: CommissionRuleOrderByRelevanceInput
  }

  export type CommissionRuleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommissionRuleWhereInput | CommissionRuleWhereInput[]
    OR?: CommissionRuleWhereInput[]
    NOT?: CommissionRuleWhereInput | CommissionRuleWhereInput[]
    periodType?: StringFilter<"CommissionRule"> | string
    quantityFrom?: IntFilter<"CommissionRule"> | number
    quantityTo?: IntNullableFilter<"CommissionRule"> | number | null
    commissionPerProduct?: FloatFilter<"CommissionRule"> | number
    bonusPerProduct?: FloatFilter<"CommissionRule"> | number
    label?: StringNullableFilter<"CommissionRule"> | string | null
    isActive?: BoolFilter<"CommissionRule"> | boolean
    createdAt?: DateTimeFilter<"CommissionRule"> | Date | string
    updatedAt?: DateTimeFilter<"CommissionRule"> | Date | string
  }, "id">

  export type CommissionRuleOrderByWithAggregationInput = {
    id?: SortOrder
    periodType?: SortOrder
    quantityFrom?: SortOrder
    quantityTo?: SortOrderInput | SortOrder
    commissionPerProduct?: SortOrder
    bonusPerProduct?: SortOrder
    label?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CommissionRuleCountOrderByAggregateInput
    _avg?: CommissionRuleAvgOrderByAggregateInput
    _max?: CommissionRuleMaxOrderByAggregateInput
    _min?: CommissionRuleMinOrderByAggregateInput
    _sum?: CommissionRuleSumOrderByAggregateInput
  }

  export type CommissionRuleScalarWhereWithAggregatesInput = {
    AND?: CommissionRuleScalarWhereWithAggregatesInput | CommissionRuleScalarWhereWithAggregatesInput[]
    OR?: CommissionRuleScalarWhereWithAggregatesInput[]
    NOT?: CommissionRuleScalarWhereWithAggregatesInput | CommissionRuleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CommissionRule"> | string
    periodType?: StringWithAggregatesFilter<"CommissionRule"> | string
    quantityFrom?: IntWithAggregatesFilter<"CommissionRule"> | number
    quantityTo?: IntNullableWithAggregatesFilter<"CommissionRule"> | number | null
    commissionPerProduct?: FloatWithAggregatesFilter<"CommissionRule"> | number
    bonusPerProduct?: FloatWithAggregatesFilter<"CommissionRule"> | number
    label?: StringNullableWithAggregatesFilter<"CommissionRule"> | string | null
    isActive?: BoolWithAggregatesFilter<"CommissionRule"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"CommissionRule"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CommissionRule"> | Date | string
  }

  export type QrCodeWhereInput = {
    AND?: QrCodeWhereInput | QrCodeWhereInput[]
    OR?: QrCodeWhereInput[]
    NOT?: QrCodeWhereInput | QrCodeWhereInput[]
    id?: StringFilter<"QrCode"> | string
    vendorId?: StringFilter<"QrCode"> | string
    uniqueKey?: StringFilter<"QrCode"> | string
    qrUrl?: StringFilter<"QrCode"> | string
    qrImageData?: StringNullableFilter<"QrCode"> | string | null
    generatedAt?: DateTimeFilter<"QrCode"> | Date | string
    isActive?: BoolFilter<"QrCode"> | boolean
    vendor?: XOR<VendorScalarRelationFilter, VendorWhereInput>
  }

  export type QrCodeOrderByWithRelationInput = {
    id?: SortOrder
    vendorId?: SortOrder
    uniqueKey?: SortOrder
    qrUrl?: SortOrder
    qrImageData?: SortOrderInput | SortOrder
    generatedAt?: SortOrder
    isActive?: SortOrder
    vendor?: VendorOrderByWithRelationInput
    _relevance?: QrCodeOrderByRelevanceInput
  }

  export type QrCodeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    uniqueKey?: string
    AND?: QrCodeWhereInput | QrCodeWhereInput[]
    OR?: QrCodeWhereInput[]
    NOT?: QrCodeWhereInput | QrCodeWhereInput[]
    vendorId?: StringFilter<"QrCode"> | string
    qrUrl?: StringFilter<"QrCode"> | string
    qrImageData?: StringNullableFilter<"QrCode"> | string | null
    generatedAt?: DateTimeFilter<"QrCode"> | Date | string
    isActive?: BoolFilter<"QrCode"> | boolean
    vendor?: XOR<VendorScalarRelationFilter, VendorWhereInput>
  }, "id" | "uniqueKey">

  export type QrCodeOrderByWithAggregationInput = {
    id?: SortOrder
    vendorId?: SortOrder
    uniqueKey?: SortOrder
    qrUrl?: SortOrder
    qrImageData?: SortOrderInput | SortOrder
    generatedAt?: SortOrder
    isActive?: SortOrder
    _count?: QrCodeCountOrderByAggregateInput
    _max?: QrCodeMaxOrderByAggregateInput
    _min?: QrCodeMinOrderByAggregateInput
  }

  export type QrCodeScalarWhereWithAggregatesInput = {
    AND?: QrCodeScalarWhereWithAggregatesInput | QrCodeScalarWhereWithAggregatesInput[]
    OR?: QrCodeScalarWhereWithAggregatesInput[]
    NOT?: QrCodeScalarWhereWithAggregatesInput | QrCodeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QrCode"> | string
    vendorId?: StringWithAggregatesFilter<"QrCode"> | string
    uniqueKey?: StringWithAggregatesFilter<"QrCode"> | string
    qrUrl?: StringWithAggregatesFilter<"QrCode"> | string
    qrImageData?: StringNullableWithAggregatesFilter<"QrCode"> | string | null
    generatedAt?: DateTimeWithAggregatesFilter<"QrCode"> | Date | string
    isActive?: BoolWithAggregatesFilter<"QrCode"> | boolean
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    type?: StringFilter<"Notification"> | string
    targetType?: StringFilter<"Notification"> | string
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    vendorNotifications?: VendorNotificationListRelationFilter
    delegueNotifications?: DelegueNotificationListRelationFilter
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    targetType?: SortOrder
    createdAt?: SortOrder
    vendorNotifications?: VendorNotificationOrderByRelationAggregateInput
    delegueNotifications?: DelegueNotificationOrderByRelationAggregateInput
    _relevance?: NotificationOrderByRelevanceInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    type?: StringFilter<"Notification"> | string
    targetType?: StringFilter<"Notification"> | string
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    vendorNotifications?: VendorNotificationListRelationFilter
    delegueNotifications?: DelegueNotificationListRelationFilter
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    targetType?: SortOrder
    createdAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    title?: StringWithAggregatesFilter<"Notification"> | string
    message?: StringWithAggregatesFilter<"Notification"> | string
    type?: StringWithAggregatesFilter<"Notification"> | string
    targetType?: StringWithAggregatesFilter<"Notification"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type VendorNotificationWhereInput = {
    AND?: VendorNotificationWhereInput | VendorNotificationWhereInput[]
    OR?: VendorNotificationWhereInput[]
    NOT?: VendorNotificationWhereInput | VendorNotificationWhereInput[]
    id?: StringFilter<"VendorNotification"> | string
    notificationId?: StringFilter<"VendorNotification"> | string
    vendorId?: StringFilter<"VendorNotification"> | string
    isRead?: BoolFilter<"VendorNotification"> | boolean
    readAt?: DateTimeNullableFilter<"VendorNotification"> | Date | string | null
    notification?: XOR<NotificationScalarRelationFilter, NotificationWhereInput>
    vendor?: XOR<VendorScalarRelationFilter, VendorWhereInput>
  }

  export type VendorNotificationOrderByWithRelationInput = {
    id?: SortOrder
    notificationId?: SortOrder
    vendorId?: SortOrder
    isRead?: SortOrder
    readAt?: SortOrderInput | SortOrder
    notification?: NotificationOrderByWithRelationInput
    vendor?: VendorOrderByWithRelationInput
    _relevance?: VendorNotificationOrderByRelevanceInput
  }

  export type VendorNotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    notificationId_vendorId?: VendorNotificationNotificationIdVendorIdCompoundUniqueInput
    AND?: VendorNotificationWhereInput | VendorNotificationWhereInput[]
    OR?: VendorNotificationWhereInput[]
    NOT?: VendorNotificationWhereInput | VendorNotificationWhereInput[]
    notificationId?: StringFilter<"VendorNotification"> | string
    vendorId?: StringFilter<"VendorNotification"> | string
    isRead?: BoolFilter<"VendorNotification"> | boolean
    readAt?: DateTimeNullableFilter<"VendorNotification"> | Date | string | null
    notification?: XOR<NotificationScalarRelationFilter, NotificationWhereInput>
    vendor?: XOR<VendorScalarRelationFilter, VendorWhereInput>
  }, "id" | "notificationId_vendorId">

  export type VendorNotificationOrderByWithAggregationInput = {
    id?: SortOrder
    notificationId?: SortOrder
    vendorId?: SortOrder
    isRead?: SortOrder
    readAt?: SortOrderInput | SortOrder
    _count?: VendorNotificationCountOrderByAggregateInput
    _max?: VendorNotificationMaxOrderByAggregateInput
    _min?: VendorNotificationMinOrderByAggregateInput
  }

  export type VendorNotificationScalarWhereWithAggregatesInput = {
    AND?: VendorNotificationScalarWhereWithAggregatesInput | VendorNotificationScalarWhereWithAggregatesInput[]
    OR?: VendorNotificationScalarWhereWithAggregatesInput[]
    NOT?: VendorNotificationScalarWhereWithAggregatesInput | VendorNotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VendorNotification"> | string
    notificationId?: StringWithAggregatesFilter<"VendorNotification"> | string
    vendorId?: StringWithAggregatesFilter<"VendorNotification"> | string
    isRead?: BoolWithAggregatesFilter<"VendorNotification"> | boolean
    readAt?: DateTimeNullableWithAggregatesFilter<"VendorNotification"> | Date | string | null
  }

  export type DelegueNotificationWhereInput = {
    AND?: DelegueNotificationWhereInput | DelegueNotificationWhereInput[]
    OR?: DelegueNotificationWhereInput[]
    NOT?: DelegueNotificationWhereInput | DelegueNotificationWhereInput[]
    id?: StringFilter<"DelegueNotification"> | string
    notificationId?: StringFilter<"DelegueNotification"> | string
    delegueId?: StringFilter<"DelegueNotification"> | string
    isRead?: BoolFilter<"DelegueNotification"> | boolean
    readAt?: DateTimeNullableFilter<"DelegueNotification"> | Date | string | null
    notification?: XOR<NotificationScalarRelationFilter, NotificationWhereInput>
    delegue?: XOR<DelegueScalarRelationFilter, DelegueWhereInput>
  }

  export type DelegueNotificationOrderByWithRelationInput = {
    id?: SortOrder
    notificationId?: SortOrder
    delegueId?: SortOrder
    isRead?: SortOrder
    readAt?: SortOrderInput | SortOrder
    notification?: NotificationOrderByWithRelationInput
    delegue?: DelegueOrderByWithRelationInput
    _relevance?: DelegueNotificationOrderByRelevanceInput
  }

  export type DelegueNotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    notificationId_delegueId?: DelegueNotificationNotificationIdDelegueIdCompoundUniqueInput
    AND?: DelegueNotificationWhereInput | DelegueNotificationWhereInput[]
    OR?: DelegueNotificationWhereInput[]
    NOT?: DelegueNotificationWhereInput | DelegueNotificationWhereInput[]
    notificationId?: StringFilter<"DelegueNotification"> | string
    delegueId?: StringFilter<"DelegueNotification"> | string
    isRead?: BoolFilter<"DelegueNotification"> | boolean
    readAt?: DateTimeNullableFilter<"DelegueNotification"> | Date | string | null
    notification?: XOR<NotificationScalarRelationFilter, NotificationWhereInput>
    delegue?: XOR<DelegueScalarRelationFilter, DelegueWhereInput>
  }, "id" | "notificationId_delegueId">

  export type DelegueNotificationOrderByWithAggregationInput = {
    id?: SortOrder
    notificationId?: SortOrder
    delegueId?: SortOrder
    isRead?: SortOrder
    readAt?: SortOrderInput | SortOrder
    _count?: DelegueNotificationCountOrderByAggregateInput
    _max?: DelegueNotificationMaxOrderByAggregateInput
    _min?: DelegueNotificationMinOrderByAggregateInput
  }

  export type DelegueNotificationScalarWhereWithAggregatesInput = {
    AND?: DelegueNotificationScalarWhereWithAggregatesInput | DelegueNotificationScalarWhereWithAggregatesInput[]
    OR?: DelegueNotificationScalarWhereWithAggregatesInput[]
    NOT?: DelegueNotificationScalarWhereWithAggregatesInput | DelegueNotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DelegueNotification"> | string
    notificationId?: StringWithAggregatesFilter<"DelegueNotification"> | string
    delegueId?: StringWithAggregatesFilter<"DelegueNotification"> | string
    isRead?: BoolWithAggregatesFilter<"DelegueNotification"> | boolean
    readAt?: DateTimeNullableWithAggregatesFilter<"DelegueNotification"> | Date | string | null
  }

  export type AdminUserCreateInput = {
    id?: string
    phone: string
    passwordHash: string
    name: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUserUncheckedCreateInput = {
    id?: string
    phone: string
    passwordHash: string
    name: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUserCreateManyInput = {
    id?: string
    phone: string
    passwordHash: string
    name: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PharmacyCreateInput = {
    id?: string
    name: string
    address?: string | null
    phone?: string | null
    region?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    vendors?: VendorCreateNestedManyWithoutPharmacyInput
  }

  export type PharmacyUncheckedCreateInput = {
    id?: string
    name: string
    address?: string | null
    phone?: string | null
    region?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    vendors?: VendorUncheckedCreateNestedManyWithoutPharmacyInput
  }

  export type PharmacyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendors?: VendorUpdateManyWithoutPharmacyNestedInput
  }

  export type PharmacyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendors?: VendorUncheckedUpdateManyWithoutPharmacyNestedInput
  }

  export type PharmacyCreateManyInput = {
    id?: string
    name: string
    address?: string | null
    phone?: string | null
    region?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PharmacyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PharmacyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VendorCreateInput = {
    id?: string
    uniqueCardNumber: string
    name?: string | null
    email?: string | null
    phone?: string | null
    ccp?: string | null
    ccpKey?: string | null
    rip?: string | null
    status?: string
    actionDate?: Date | string
    registrationBonus?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    pharmacy?: PharmacyCreateNestedOneWithoutVendorsInput
    sales?: SaleCreateNestedManyWithoutVendorInput
    paymentPeriods?: PaymentPeriodCreateNestedManyWithoutVendorInput
    qrCodes?: QrCodeCreateNestedManyWithoutVendorInput
    notifications?: VendorNotificationCreateNestedManyWithoutVendorInput
  }

  export type VendorUncheckedCreateInput = {
    id?: string
    uniqueCardNumber: string
    name?: string | null
    email?: string | null
    phone?: string | null
    ccp?: string | null
    ccpKey?: string | null
    rip?: string | null
    pharmacyId?: string | null
    status?: string
    actionDate?: Date | string
    registrationBonus?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sales?: SaleUncheckedCreateNestedManyWithoutVendorInput
    paymentPeriods?: PaymentPeriodUncheckedCreateNestedManyWithoutVendorInput
    qrCodes?: QrCodeUncheckedCreateNestedManyWithoutVendorInput
    notifications?: VendorNotificationUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    uniqueCardNumber?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    ccp?: NullableStringFieldUpdateOperationsInput | string | null
    ccpKey?: NullableStringFieldUpdateOperationsInput | string | null
    rip?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    actionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    registrationBonus?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pharmacy?: PharmacyUpdateOneWithoutVendorsNestedInput
    sales?: SaleUpdateManyWithoutVendorNestedInput
    paymentPeriods?: PaymentPeriodUpdateManyWithoutVendorNestedInput
    qrCodes?: QrCodeUpdateManyWithoutVendorNestedInput
    notifications?: VendorNotificationUpdateManyWithoutVendorNestedInput
  }

  export type VendorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    uniqueCardNumber?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    ccp?: NullableStringFieldUpdateOperationsInput | string | null
    ccpKey?: NullableStringFieldUpdateOperationsInput | string | null
    rip?: NullableStringFieldUpdateOperationsInput | string | null
    pharmacyId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    actionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    registrationBonus?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sales?: SaleUncheckedUpdateManyWithoutVendorNestedInput
    paymentPeriods?: PaymentPeriodUncheckedUpdateManyWithoutVendorNestedInput
    qrCodes?: QrCodeUncheckedUpdateManyWithoutVendorNestedInput
    notifications?: VendorNotificationUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type VendorCreateManyInput = {
    id?: string
    uniqueCardNumber: string
    name?: string | null
    email?: string | null
    phone?: string | null
    ccp?: string | null
    ccpKey?: string | null
    rip?: string | null
    pharmacyId?: string | null
    status?: string
    actionDate?: Date | string
    registrationBonus?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VendorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    uniqueCardNumber?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    ccp?: NullableStringFieldUpdateOperationsInput | string | null
    ccpKey?: NullableStringFieldUpdateOperationsInput | string | null
    rip?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    actionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    registrationBonus?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VendorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    uniqueCardNumber?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    ccp?: NullableStringFieldUpdateOperationsInput | string | null
    ccpKey?: NullableStringFieldUpdateOperationsInput | string | null
    rip?: NullableStringFieldUpdateOperationsInput | string | null
    pharmacyId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    actionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    registrationBonus?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DelegueCreateInput = {
    id?: string
    uniqueCardNumber: string
    name: string
    email?: string | null
    phone?: string | null
    region: JsonNullValueInput | InputJsonValue
    sector?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    qrCodes?: DelegueQrCodeCreateNestedManyWithoutDelegueInput
    notifications?: DelegueNotificationCreateNestedManyWithoutDelegueInput
  }

  export type DelegueUncheckedCreateInput = {
    id?: string
    uniqueCardNumber: string
    name: string
    email?: string | null
    phone?: string | null
    region: JsonNullValueInput | InputJsonValue
    sector?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    qrCodes?: DelegueQrCodeUncheckedCreateNestedManyWithoutDelegueInput
    notifications?: DelegueNotificationUncheckedCreateNestedManyWithoutDelegueInput
  }

  export type DelegueUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    uniqueCardNumber?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    region?: JsonNullValueInput | InputJsonValue
    sector?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    qrCodes?: DelegueQrCodeUpdateManyWithoutDelegueNestedInput
    notifications?: DelegueNotificationUpdateManyWithoutDelegueNestedInput
  }

  export type DelegueUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    uniqueCardNumber?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    region?: JsonNullValueInput | InputJsonValue
    sector?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    qrCodes?: DelegueQrCodeUncheckedUpdateManyWithoutDelegueNestedInput
    notifications?: DelegueNotificationUncheckedUpdateManyWithoutDelegueNestedInput
  }

  export type DelegueCreateManyInput = {
    id?: string
    uniqueCardNumber: string
    name: string
    email?: string | null
    phone?: string | null
    region: JsonNullValueInput | InputJsonValue
    sector?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DelegueUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    uniqueCardNumber?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    region?: JsonNullValueInput | InputJsonValue
    sector?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DelegueUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    uniqueCardNumber?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    region?: JsonNullValueInput | InputJsonValue
    sector?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DelegueQrCodeCreateInput = {
    id?: string
    uniqueKey: string
    qrUrl: string
    qrImageData?: string | null
    generatedAt?: Date | string
    isActive?: boolean
    delegue: DelegueCreateNestedOneWithoutQrCodesInput
  }

  export type DelegueQrCodeUncheckedCreateInput = {
    id?: string
    delegueId: string
    uniqueKey: string
    qrUrl: string
    qrImageData?: string | null
    generatedAt?: Date | string
    isActive?: boolean
  }

  export type DelegueQrCodeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    uniqueKey?: StringFieldUpdateOperationsInput | string
    qrUrl?: StringFieldUpdateOperationsInput | string
    qrImageData?: NullableStringFieldUpdateOperationsInput | string | null
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    delegue?: DelegueUpdateOneRequiredWithoutQrCodesNestedInput
  }

  export type DelegueQrCodeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    delegueId?: StringFieldUpdateOperationsInput | string
    uniqueKey?: StringFieldUpdateOperationsInput | string
    qrUrl?: StringFieldUpdateOperationsInput | string
    qrImageData?: NullableStringFieldUpdateOperationsInput | string | null
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DelegueQrCodeCreateManyInput = {
    id?: string
    delegueId: string
    uniqueKey: string
    qrUrl: string
    qrImageData?: string | null
    generatedAt?: Date | string
    isActive?: boolean
  }

  export type DelegueQrCodeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    uniqueKey?: StringFieldUpdateOperationsInput | string
    qrUrl?: StringFieldUpdateOperationsInput | string
    qrImageData?: NullableStringFieldUpdateOperationsInput | string | null
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DelegueQrCodeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    delegueId?: StringFieldUpdateOperationsInput | string
    uniqueKey?: StringFieldUpdateOperationsInput | string
    qrUrl?: StringFieldUpdateOperationsInput | string
    qrImageData?: NullableStringFieldUpdateOperationsInput | string | null
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductCreateInput = {
    id?: string
    name: string
    slug: string
    indication: string
    description?: string | null
    argumentKey?: string | null
    whyItWorks?: string | null
    imageUrl?: string | null
    isActive?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    sales?: SaleCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    indication: string
    description?: string | null
    argumentKey?: string | null
    whyItWorks?: string | null
    imageUrl?: string | null
    isActive?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    sales?: SaleUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    indication?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    argumentKey?: NullableStringFieldUpdateOperationsInput | string | null
    whyItWorks?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sales?: SaleUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    indication?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    argumentKey?: NullableStringFieldUpdateOperationsInput | string | null
    whyItWorks?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sales?: SaleUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: string
    name: string
    slug: string
    indication: string
    description?: string | null
    argumentKey?: string | null
    whyItWorks?: string | null
    imageUrl?: string | null
    isActive?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    indication?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    argumentKey?: NullableStringFieldUpdateOperationsInput | string | null
    whyItWorks?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    indication?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    argumentKey?: NullableStringFieldUpdateOperationsInput | string | null
    whyItWorks?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleCreateInput = {
    id?: string
    productName: string
    quantity: number
    unitPrice?: number
    saleDate?: Date | string
    createdAt?: Date | string
    vendor: VendorCreateNestedOneWithoutSalesInput
    product?: ProductCreateNestedOneWithoutSalesInput
    period?: PaymentPeriodCreateNestedOneWithoutSalesInput
  }

  export type SaleUncheckedCreateInput = {
    id?: string
    vendorId: string
    productId?: string | null
    productName: string
    quantity: number
    unitPrice?: number
    saleDate?: Date | string
    periodId?: string | null
    createdAt?: Date | string
  }

  export type SaleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    saleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendor?: VendorUpdateOneRequiredWithoutSalesNestedInput
    product?: ProductUpdateOneWithoutSalesNestedInput
    period?: PaymentPeriodUpdateOneWithoutSalesNestedInput
  }

  export type SaleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    saleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    periodId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleCreateManyInput = {
    id?: string
    vendorId: string
    productId?: string | null
    productName: string
    quantity: number
    unitPrice?: number
    saleDate?: Date | string
    periodId?: string | null
    createdAt?: Date | string
  }

  export type SaleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    saleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    saleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    periodId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentPeriodCreateInput = {
    id?: string
    periodType: string
    startDate: Date | string
    endDate: Date | string
    totalSales?: number
    totalCommission?: number
    status?: string
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vendor: VendorCreateNestedOneWithoutPaymentPeriodsInput
    sales?: SaleCreateNestedManyWithoutPeriodInput
  }

  export type PaymentPeriodUncheckedCreateInput = {
    id?: string
    vendorId: string
    periodType: string
    startDate: Date | string
    endDate: Date | string
    totalSales?: number
    totalCommission?: number
    status?: string
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sales?: SaleUncheckedCreateNestedManyWithoutPeriodInput
  }

  export type PaymentPeriodUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    periodType?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalSales?: IntFieldUpdateOperationsInput | number
    totalCommission?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendor?: VendorUpdateOneRequiredWithoutPaymentPeriodsNestedInput
    sales?: SaleUpdateManyWithoutPeriodNestedInput
  }

  export type PaymentPeriodUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    periodType?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalSales?: IntFieldUpdateOperationsInput | number
    totalCommission?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sales?: SaleUncheckedUpdateManyWithoutPeriodNestedInput
  }

  export type PaymentPeriodCreateManyInput = {
    id?: string
    vendorId: string
    periodType: string
    startDate: Date | string
    endDate: Date | string
    totalSales?: number
    totalCommission?: number
    status?: string
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentPeriodUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    periodType?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalSales?: IntFieldUpdateOperationsInput | number
    totalCommission?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentPeriodUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    periodType?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalSales?: IntFieldUpdateOperationsInput | number
    totalCommission?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommissionRuleCreateInput = {
    id?: string
    periodType: string
    quantityFrom: number
    quantityTo?: number | null
    commissionPerProduct: number
    bonusPerProduct?: number
    label?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommissionRuleUncheckedCreateInput = {
    id?: string
    periodType: string
    quantityFrom: number
    quantityTo?: number | null
    commissionPerProduct: number
    bonusPerProduct?: number
    label?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommissionRuleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    periodType?: StringFieldUpdateOperationsInput | string
    quantityFrom?: IntFieldUpdateOperationsInput | number
    quantityTo?: NullableIntFieldUpdateOperationsInput | number | null
    commissionPerProduct?: FloatFieldUpdateOperationsInput | number
    bonusPerProduct?: FloatFieldUpdateOperationsInput | number
    label?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommissionRuleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    periodType?: StringFieldUpdateOperationsInput | string
    quantityFrom?: IntFieldUpdateOperationsInput | number
    quantityTo?: NullableIntFieldUpdateOperationsInput | number | null
    commissionPerProduct?: FloatFieldUpdateOperationsInput | number
    bonusPerProduct?: FloatFieldUpdateOperationsInput | number
    label?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommissionRuleCreateManyInput = {
    id?: string
    periodType: string
    quantityFrom: number
    quantityTo?: number | null
    commissionPerProduct: number
    bonusPerProduct?: number
    label?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommissionRuleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    periodType?: StringFieldUpdateOperationsInput | string
    quantityFrom?: IntFieldUpdateOperationsInput | number
    quantityTo?: NullableIntFieldUpdateOperationsInput | number | null
    commissionPerProduct?: FloatFieldUpdateOperationsInput | number
    bonusPerProduct?: FloatFieldUpdateOperationsInput | number
    label?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommissionRuleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    periodType?: StringFieldUpdateOperationsInput | string
    quantityFrom?: IntFieldUpdateOperationsInput | number
    quantityTo?: NullableIntFieldUpdateOperationsInput | number | null
    commissionPerProduct?: FloatFieldUpdateOperationsInput | number
    bonusPerProduct?: FloatFieldUpdateOperationsInput | number
    label?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QrCodeCreateInput = {
    id?: string
    uniqueKey: string
    qrUrl: string
    qrImageData?: string | null
    generatedAt?: Date | string
    isActive?: boolean
    vendor: VendorCreateNestedOneWithoutQrCodesInput
  }

  export type QrCodeUncheckedCreateInput = {
    id?: string
    vendorId: string
    uniqueKey: string
    qrUrl: string
    qrImageData?: string | null
    generatedAt?: Date | string
    isActive?: boolean
  }

  export type QrCodeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    uniqueKey?: StringFieldUpdateOperationsInput | string
    qrUrl?: StringFieldUpdateOperationsInput | string
    qrImageData?: NullableStringFieldUpdateOperationsInput | string | null
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    vendor?: VendorUpdateOneRequiredWithoutQrCodesNestedInput
  }

  export type QrCodeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    uniqueKey?: StringFieldUpdateOperationsInput | string
    qrUrl?: StringFieldUpdateOperationsInput | string
    qrImageData?: NullableStringFieldUpdateOperationsInput | string | null
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type QrCodeCreateManyInput = {
    id?: string
    vendorId: string
    uniqueKey: string
    qrUrl: string
    qrImageData?: string | null
    generatedAt?: Date | string
    isActive?: boolean
  }

  export type QrCodeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    uniqueKey?: StringFieldUpdateOperationsInput | string
    qrUrl?: StringFieldUpdateOperationsInput | string
    qrImageData?: NullableStringFieldUpdateOperationsInput | string | null
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type QrCodeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    uniqueKey?: StringFieldUpdateOperationsInput | string
    qrUrl?: StringFieldUpdateOperationsInput | string
    qrImageData?: NullableStringFieldUpdateOperationsInput | string | null
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationCreateInput = {
    id?: string
    title: string
    message: string
    type?: string
    targetType?: string
    createdAt?: Date | string
    vendorNotifications?: VendorNotificationCreateNestedManyWithoutNotificationInput
    delegueNotifications?: DelegueNotificationCreateNestedManyWithoutNotificationInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    title: string
    message: string
    type?: string
    targetType?: string
    createdAt?: Date | string
    vendorNotifications?: VendorNotificationUncheckedCreateNestedManyWithoutNotificationInput
    delegueNotifications?: DelegueNotificationUncheckedCreateNestedManyWithoutNotificationInput
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    targetType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendorNotifications?: VendorNotificationUpdateManyWithoutNotificationNestedInput
    delegueNotifications?: DelegueNotificationUpdateManyWithoutNotificationNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    targetType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendorNotifications?: VendorNotificationUncheckedUpdateManyWithoutNotificationNestedInput
    delegueNotifications?: DelegueNotificationUncheckedUpdateManyWithoutNotificationNestedInput
  }

  export type NotificationCreateManyInput = {
    id?: string
    title: string
    message: string
    type?: string
    targetType?: string
    createdAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    targetType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    targetType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VendorNotificationCreateInput = {
    id?: string
    isRead?: boolean
    readAt?: Date | string | null
    notification: NotificationCreateNestedOneWithoutVendorNotificationsInput
    vendor: VendorCreateNestedOneWithoutNotificationsInput
  }

  export type VendorNotificationUncheckedCreateInput = {
    id?: string
    notificationId: string
    vendorId: string
    isRead?: boolean
    readAt?: Date | string | null
  }

  export type VendorNotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notification?: NotificationUpdateOneRequiredWithoutVendorNotificationsNestedInput
    vendor?: VendorUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type VendorNotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    notificationId?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VendorNotificationCreateManyInput = {
    id?: string
    notificationId: string
    vendorId: string
    isRead?: boolean
    readAt?: Date | string | null
  }

  export type VendorNotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VendorNotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    notificationId?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DelegueNotificationCreateInput = {
    id?: string
    isRead?: boolean
    readAt?: Date | string | null
    notification: NotificationCreateNestedOneWithoutDelegueNotificationsInput
    delegue: DelegueCreateNestedOneWithoutNotificationsInput
  }

  export type DelegueNotificationUncheckedCreateInput = {
    id?: string
    notificationId: string
    delegueId: string
    isRead?: boolean
    readAt?: Date | string | null
  }

  export type DelegueNotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notification?: NotificationUpdateOneRequiredWithoutDelegueNotificationsNestedInput
    delegue?: DelegueUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type DelegueNotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    notificationId?: StringFieldUpdateOperationsInput | string
    delegueId?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DelegueNotificationCreateManyInput = {
    id?: string
    notificationId: string
    delegueId: string
    isRead?: boolean
    readAt?: Date | string | null
  }

  export type DelegueNotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DelegueNotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    notificationId?: StringFieldUpdateOperationsInput | string
    delegueId?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AdminUserOrderByRelevanceInput = {
    fields: AdminUserOrderByRelevanceFieldEnum | AdminUserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AdminUserCountOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminUserMaxOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminUserMinOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type VendorListRelationFilter = {
    every?: VendorWhereInput
    some?: VendorWhereInput
    none?: VendorWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type VendorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PharmacyOrderByRelevanceInput = {
    fields: PharmacyOrderByRelevanceFieldEnum | PharmacyOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PharmacyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    region?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PharmacyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    region?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PharmacyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    region?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PharmacyNullableScalarRelationFilter = {
    is?: PharmacyWhereInput | null
    isNot?: PharmacyWhereInput | null
  }

  export type SaleListRelationFilter = {
    every?: SaleWhereInput
    some?: SaleWhereInput
    none?: SaleWhereInput
  }

  export type PaymentPeriodListRelationFilter = {
    every?: PaymentPeriodWhereInput
    some?: PaymentPeriodWhereInput
    none?: PaymentPeriodWhereInput
  }

  export type QrCodeListRelationFilter = {
    every?: QrCodeWhereInput
    some?: QrCodeWhereInput
    none?: QrCodeWhereInput
  }

  export type VendorNotificationListRelationFilter = {
    every?: VendorNotificationWhereInput
    some?: VendorNotificationWhereInput
    none?: VendorNotificationWhereInput
  }

  export type SaleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentPeriodOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QrCodeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VendorNotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VendorOrderByRelevanceInput = {
    fields: VendorOrderByRelevanceFieldEnum | VendorOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type VendorCountOrderByAggregateInput = {
    id?: SortOrder
    uniqueCardNumber?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    ccp?: SortOrder
    ccpKey?: SortOrder
    rip?: SortOrder
    pharmacyId?: SortOrder
    status?: SortOrder
    actionDate?: SortOrder
    registrationBonus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VendorMaxOrderByAggregateInput = {
    id?: SortOrder
    uniqueCardNumber?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    ccp?: SortOrder
    ccpKey?: SortOrder
    rip?: SortOrder
    pharmacyId?: SortOrder
    status?: SortOrder
    actionDate?: SortOrder
    registrationBonus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VendorMinOrderByAggregateInput = {
    id?: SortOrder
    uniqueCardNumber?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    ccp?: SortOrder
    ccpKey?: SortOrder
    rip?: SortOrder
    pharmacyId?: SortOrder
    status?: SortOrder
    actionDate?: SortOrder
    registrationBonus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DelegueQrCodeListRelationFilter = {
    every?: DelegueQrCodeWhereInput
    some?: DelegueQrCodeWhereInput
    none?: DelegueQrCodeWhereInput
  }

  export type DelegueNotificationListRelationFilter = {
    every?: DelegueNotificationWhereInput
    some?: DelegueNotificationWhereInput
    none?: DelegueNotificationWhereInput
  }

  export type DelegueQrCodeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DelegueNotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DelegueOrderByRelevanceInput = {
    fields: DelegueOrderByRelevanceFieldEnum | DelegueOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DelegueCountOrderByAggregateInput = {
    id?: SortOrder
    uniqueCardNumber?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    region?: SortOrder
    sector?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DelegueMaxOrderByAggregateInput = {
    id?: SortOrder
    uniqueCardNumber?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    sector?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DelegueMinOrderByAggregateInput = {
    id?: SortOrder
    uniqueCardNumber?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    sector?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type DelegueScalarRelationFilter = {
    is?: DelegueWhereInput
    isNot?: DelegueWhereInput
  }

  export type DelegueQrCodeOrderByRelevanceInput = {
    fields: DelegueQrCodeOrderByRelevanceFieldEnum | DelegueQrCodeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DelegueQrCodeCountOrderByAggregateInput = {
    id?: SortOrder
    delegueId?: SortOrder
    uniqueKey?: SortOrder
    qrUrl?: SortOrder
    qrImageData?: SortOrder
    generatedAt?: SortOrder
    isActive?: SortOrder
  }

  export type DelegueQrCodeMaxOrderByAggregateInput = {
    id?: SortOrder
    delegueId?: SortOrder
    uniqueKey?: SortOrder
    qrUrl?: SortOrder
    qrImageData?: SortOrder
    generatedAt?: SortOrder
    isActive?: SortOrder
  }

  export type DelegueQrCodeMinOrderByAggregateInput = {
    id?: SortOrder
    delegueId?: SortOrder
    uniqueKey?: SortOrder
    qrUrl?: SortOrder
    qrImageData?: SortOrder
    generatedAt?: SortOrder
    isActive?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ProductOrderByRelevanceInput = {
    fields: ProductOrderByRelevanceFieldEnum | ProductOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    indication?: SortOrder
    description?: SortOrder
    argumentKey?: SortOrder
    whyItWorks?: SortOrder
    imageUrl?: SortOrder
    isActive?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    indication?: SortOrder
    description?: SortOrder
    argumentKey?: SortOrder
    whyItWorks?: SortOrder
    imageUrl?: SortOrder
    isActive?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    indication?: SortOrder
    description?: SortOrder
    argumentKey?: SortOrder
    whyItWorks?: SortOrder
    imageUrl?: SortOrder
    isActive?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type VendorScalarRelationFilter = {
    is?: VendorWhereInput
    isNot?: VendorWhereInput
  }

  export type ProductNullableScalarRelationFilter = {
    is?: ProductWhereInput | null
    isNot?: ProductWhereInput | null
  }

  export type PaymentPeriodNullableScalarRelationFilter = {
    is?: PaymentPeriodWhereInput | null
    isNot?: PaymentPeriodWhereInput | null
  }

  export type SaleOrderByRelevanceInput = {
    fields: SaleOrderByRelevanceFieldEnum | SaleOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SaleCountOrderByAggregateInput = {
    id?: SortOrder
    vendorId?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    saleDate?: SortOrder
    periodId?: SortOrder
    createdAt?: SortOrder
  }

  export type SaleAvgOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
  }

  export type SaleMaxOrderByAggregateInput = {
    id?: SortOrder
    vendorId?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    saleDate?: SortOrder
    periodId?: SortOrder
    createdAt?: SortOrder
  }

  export type SaleMinOrderByAggregateInput = {
    id?: SortOrder
    vendorId?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    saleDate?: SortOrder
    periodId?: SortOrder
    createdAt?: SortOrder
  }

  export type SaleSumOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type PaymentPeriodOrderByRelevanceInput = {
    fields: PaymentPeriodOrderByRelevanceFieldEnum | PaymentPeriodOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PaymentPeriodCountOrderByAggregateInput = {
    id?: SortOrder
    vendorId?: SortOrder
    periodType?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    totalSales?: SortOrder
    totalCommission?: SortOrder
    status?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentPeriodAvgOrderByAggregateInput = {
    totalSales?: SortOrder
    totalCommission?: SortOrder
  }

  export type PaymentPeriodMaxOrderByAggregateInput = {
    id?: SortOrder
    vendorId?: SortOrder
    periodType?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    totalSales?: SortOrder
    totalCommission?: SortOrder
    status?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentPeriodMinOrderByAggregateInput = {
    id?: SortOrder
    vendorId?: SortOrder
    periodType?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    totalSales?: SortOrder
    totalCommission?: SortOrder
    status?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentPeriodSumOrderByAggregateInput = {
    totalSales?: SortOrder
    totalCommission?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CommissionRuleOrderByRelevanceInput = {
    fields: CommissionRuleOrderByRelevanceFieldEnum | CommissionRuleOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CommissionRuleCountOrderByAggregateInput = {
    id?: SortOrder
    periodType?: SortOrder
    quantityFrom?: SortOrder
    quantityTo?: SortOrder
    commissionPerProduct?: SortOrder
    bonusPerProduct?: SortOrder
    label?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommissionRuleAvgOrderByAggregateInput = {
    quantityFrom?: SortOrder
    quantityTo?: SortOrder
    commissionPerProduct?: SortOrder
    bonusPerProduct?: SortOrder
  }

  export type CommissionRuleMaxOrderByAggregateInput = {
    id?: SortOrder
    periodType?: SortOrder
    quantityFrom?: SortOrder
    quantityTo?: SortOrder
    commissionPerProduct?: SortOrder
    bonusPerProduct?: SortOrder
    label?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommissionRuleMinOrderByAggregateInput = {
    id?: SortOrder
    periodType?: SortOrder
    quantityFrom?: SortOrder
    quantityTo?: SortOrder
    commissionPerProduct?: SortOrder
    bonusPerProduct?: SortOrder
    label?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommissionRuleSumOrderByAggregateInput = {
    quantityFrom?: SortOrder
    quantityTo?: SortOrder
    commissionPerProduct?: SortOrder
    bonusPerProduct?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type QrCodeOrderByRelevanceInput = {
    fields: QrCodeOrderByRelevanceFieldEnum | QrCodeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type QrCodeCountOrderByAggregateInput = {
    id?: SortOrder
    vendorId?: SortOrder
    uniqueKey?: SortOrder
    qrUrl?: SortOrder
    qrImageData?: SortOrder
    generatedAt?: SortOrder
    isActive?: SortOrder
  }

  export type QrCodeMaxOrderByAggregateInput = {
    id?: SortOrder
    vendorId?: SortOrder
    uniqueKey?: SortOrder
    qrUrl?: SortOrder
    qrImageData?: SortOrder
    generatedAt?: SortOrder
    isActive?: SortOrder
  }

  export type QrCodeMinOrderByAggregateInput = {
    id?: SortOrder
    vendorId?: SortOrder
    uniqueKey?: SortOrder
    qrUrl?: SortOrder
    qrImageData?: SortOrder
    generatedAt?: SortOrder
    isActive?: SortOrder
  }

  export type NotificationOrderByRelevanceInput = {
    fields: NotificationOrderByRelevanceFieldEnum | NotificationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    targetType?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    targetType?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    targetType?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationScalarRelationFilter = {
    is?: NotificationWhereInput
    isNot?: NotificationWhereInput
  }

  export type VendorNotificationOrderByRelevanceInput = {
    fields: VendorNotificationOrderByRelevanceFieldEnum | VendorNotificationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type VendorNotificationNotificationIdVendorIdCompoundUniqueInput = {
    notificationId: string
    vendorId: string
  }

  export type VendorNotificationCountOrderByAggregateInput = {
    id?: SortOrder
    notificationId?: SortOrder
    vendorId?: SortOrder
    isRead?: SortOrder
    readAt?: SortOrder
  }

  export type VendorNotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    notificationId?: SortOrder
    vendorId?: SortOrder
    isRead?: SortOrder
    readAt?: SortOrder
  }

  export type VendorNotificationMinOrderByAggregateInput = {
    id?: SortOrder
    notificationId?: SortOrder
    vendorId?: SortOrder
    isRead?: SortOrder
    readAt?: SortOrder
  }

  export type DelegueNotificationOrderByRelevanceInput = {
    fields: DelegueNotificationOrderByRelevanceFieldEnum | DelegueNotificationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DelegueNotificationNotificationIdDelegueIdCompoundUniqueInput = {
    notificationId: string
    delegueId: string
  }

  export type DelegueNotificationCountOrderByAggregateInput = {
    id?: SortOrder
    notificationId?: SortOrder
    delegueId?: SortOrder
    isRead?: SortOrder
    readAt?: SortOrder
  }

  export type DelegueNotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    notificationId?: SortOrder
    delegueId?: SortOrder
    isRead?: SortOrder
    readAt?: SortOrder
  }

  export type DelegueNotificationMinOrderByAggregateInput = {
    id?: SortOrder
    notificationId?: SortOrder
    delegueId?: SortOrder
    isRead?: SortOrder
    readAt?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type VendorCreateNestedManyWithoutPharmacyInput = {
    create?: XOR<VendorCreateWithoutPharmacyInput, VendorUncheckedCreateWithoutPharmacyInput> | VendorCreateWithoutPharmacyInput[] | VendorUncheckedCreateWithoutPharmacyInput[]
    connectOrCreate?: VendorCreateOrConnectWithoutPharmacyInput | VendorCreateOrConnectWithoutPharmacyInput[]
    createMany?: VendorCreateManyPharmacyInputEnvelope
    connect?: VendorWhereUniqueInput | VendorWhereUniqueInput[]
  }

  export type VendorUncheckedCreateNestedManyWithoutPharmacyInput = {
    create?: XOR<VendorCreateWithoutPharmacyInput, VendorUncheckedCreateWithoutPharmacyInput> | VendorCreateWithoutPharmacyInput[] | VendorUncheckedCreateWithoutPharmacyInput[]
    connectOrCreate?: VendorCreateOrConnectWithoutPharmacyInput | VendorCreateOrConnectWithoutPharmacyInput[]
    createMany?: VendorCreateManyPharmacyInputEnvelope
    connect?: VendorWhereUniqueInput | VendorWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type VendorUpdateManyWithoutPharmacyNestedInput = {
    create?: XOR<VendorCreateWithoutPharmacyInput, VendorUncheckedCreateWithoutPharmacyInput> | VendorCreateWithoutPharmacyInput[] | VendorUncheckedCreateWithoutPharmacyInput[]
    connectOrCreate?: VendorCreateOrConnectWithoutPharmacyInput | VendorCreateOrConnectWithoutPharmacyInput[]
    upsert?: VendorUpsertWithWhereUniqueWithoutPharmacyInput | VendorUpsertWithWhereUniqueWithoutPharmacyInput[]
    createMany?: VendorCreateManyPharmacyInputEnvelope
    set?: VendorWhereUniqueInput | VendorWhereUniqueInput[]
    disconnect?: VendorWhereUniqueInput | VendorWhereUniqueInput[]
    delete?: VendorWhereUniqueInput | VendorWhereUniqueInput[]
    connect?: VendorWhereUniqueInput | VendorWhereUniqueInput[]
    update?: VendorUpdateWithWhereUniqueWithoutPharmacyInput | VendorUpdateWithWhereUniqueWithoutPharmacyInput[]
    updateMany?: VendorUpdateManyWithWhereWithoutPharmacyInput | VendorUpdateManyWithWhereWithoutPharmacyInput[]
    deleteMany?: VendorScalarWhereInput | VendorScalarWhereInput[]
  }

  export type VendorUncheckedUpdateManyWithoutPharmacyNestedInput = {
    create?: XOR<VendorCreateWithoutPharmacyInput, VendorUncheckedCreateWithoutPharmacyInput> | VendorCreateWithoutPharmacyInput[] | VendorUncheckedCreateWithoutPharmacyInput[]
    connectOrCreate?: VendorCreateOrConnectWithoutPharmacyInput | VendorCreateOrConnectWithoutPharmacyInput[]
    upsert?: VendorUpsertWithWhereUniqueWithoutPharmacyInput | VendorUpsertWithWhereUniqueWithoutPharmacyInput[]
    createMany?: VendorCreateManyPharmacyInputEnvelope
    set?: VendorWhereUniqueInput | VendorWhereUniqueInput[]
    disconnect?: VendorWhereUniqueInput | VendorWhereUniqueInput[]
    delete?: VendorWhereUniqueInput | VendorWhereUniqueInput[]
    connect?: VendorWhereUniqueInput | VendorWhereUniqueInput[]
    update?: VendorUpdateWithWhereUniqueWithoutPharmacyInput | VendorUpdateWithWhereUniqueWithoutPharmacyInput[]
    updateMany?: VendorUpdateManyWithWhereWithoutPharmacyInput | VendorUpdateManyWithWhereWithoutPharmacyInput[]
    deleteMany?: VendorScalarWhereInput | VendorScalarWhereInput[]
  }

  export type PharmacyCreateNestedOneWithoutVendorsInput = {
    create?: XOR<PharmacyCreateWithoutVendorsInput, PharmacyUncheckedCreateWithoutVendorsInput>
    connectOrCreate?: PharmacyCreateOrConnectWithoutVendorsInput
    connect?: PharmacyWhereUniqueInput
  }

  export type SaleCreateNestedManyWithoutVendorInput = {
    create?: XOR<SaleCreateWithoutVendorInput, SaleUncheckedCreateWithoutVendorInput> | SaleCreateWithoutVendorInput[] | SaleUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutVendorInput | SaleCreateOrConnectWithoutVendorInput[]
    createMany?: SaleCreateManyVendorInputEnvelope
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
  }

  export type PaymentPeriodCreateNestedManyWithoutVendorInput = {
    create?: XOR<PaymentPeriodCreateWithoutVendorInput, PaymentPeriodUncheckedCreateWithoutVendorInput> | PaymentPeriodCreateWithoutVendorInput[] | PaymentPeriodUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: PaymentPeriodCreateOrConnectWithoutVendorInput | PaymentPeriodCreateOrConnectWithoutVendorInput[]
    createMany?: PaymentPeriodCreateManyVendorInputEnvelope
    connect?: PaymentPeriodWhereUniqueInput | PaymentPeriodWhereUniqueInput[]
  }

  export type QrCodeCreateNestedManyWithoutVendorInput = {
    create?: XOR<QrCodeCreateWithoutVendorInput, QrCodeUncheckedCreateWithoutVendorInput> | QrCodeCreateWithoutVendorInput[] | QrCodeUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: QrCodeCreateOrConnectWithoutVendorInput | QrCodeCreateOrConnectWithoutVendorInput[]
    createMany?: QrCodeCreateManyVendorInputEnvelope
    connect?: QrCodeWhereUniqueInput | QrCodeWhereUniqueInput[]
  }

  export type VendorNotificationCreateNestedManyWithoutVendorInput = {
    create?: XOR<VendorNotificationCreateWithoutVendorInput, VendorNotificationUncheckedCreateWithoutVendorInput> | VendorNotificationCreateWithoutVendorInput[] | VendorNotificationUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: VendorNotificationCreateOrConnectWithoutVendorInput | VendorNotificationCreateOrConnectWithoutVendorInput[]
    createMany?: VendorNotificationCreateManyVendorInputEnvelope
    connect?: VendorNotificationWhereUniqueInput | VendorNotificationWhereUniqueInput[]
  }

  export type SaleUncheckedCreateNestedManyWithoutVendorInput = {
    create?: XOR<SaleCreateWithoutVendorInput, SaleUncheckedCreateWithoutVendorInput> | SaleCreateWithoutVendorInput[] | SaleUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutVendorInput | SaleCreateOrConnectWithoutVendorInput[]
    createMany?: SaleCreateManyVendorInputEnvelope
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
  }

  export type PaymentPeriodUncheckedCreateNestedManyWithoutVendorInput = {
    create?: XOR<PaymentPeriodCreateWithoutVendorInput, PaymentPeriodUncheckedCreateWithoutVendorInput> | PaymentPeriodCreateWithoutVendorInput[] | PaymentPeriodUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: PaymentPeriodCreateOrConnectWithoutVendorInput | PaymentPeriodCreateOrConnectWithoutVendorInput[]
    createMany?: PaymentPeriodCreateManyVendorInputEnvelope
    connect?: PaymentPeriodWhereUniqueInput | PaymentPeriodWhereUniqueInput[]
  }

  export type QrCodeUncheckedCreateNestedManyWithoutVendorInput = {
    create?: XOR<QrCodeCreateWithoutVendorInput, QrCodeUncheckedCreateWithoutVendorInput> | QrCodeCreateWithoutVendorInput[] | QrCodeUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: QrCodeCreateOrConnectWithoutVendorInput | QrCodeCreateOrConnectWithoutVendorInput[]
    createMany?: QrCodeCreateManyVendorInputEnvelope
    connect?: QrCodeWhereUniqueInput | QrCodeWhereUniqueInput[]
  }

  export type VendorNotificationUncheckedCreateNestedManyWithoutVendorInput = {
    create?: XOR<VendorNotificationCreateWithoutVendorInput, VendorNotificationUncheckedCreateWithoutVendorInput> | VendorNotificationCreateWithoutVendorInput[] | VendorNotificationUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: VendorNotificationCreateOrConnectWithoutVendorInput | VendorNotificationCreateOrConnectWithoutVendorInput[]
    createMany?: VendorNotificationCreateManyVendorInputEnvelope
    connect?: VendorNotificationWhereUniqueInput | VendorNotificationWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type PharmacyUpdateOneWithoutVendorsNestedInput = {
    create?: XOR<PharmacyCreateWithoutVendorsInput, PharmacyUncheckedCreateWithoutVendorsInput>
    connectOrCreate?: PharmacyCreateOrConnectWithoutVendorsInput
    upsert?: PharmacyUpsertWithoutVendorsInput
    disconnect?: PharmacyWhereInput | boolean
    delete?: PharmacyWhereInput | boolean
    connect?: PharmacyWhereUniqueInput
    update?: XOR<XOR<PharmacyUpdateToOneWithWhereWithoutVendorsInput, PharmacyUpdateWithoutVendorsInput>, PharmacyUncheckedUpdateWithoutVendorsInput>
  }

  export type SaleUpdateManyWithoutVendorNestedInput = {
    create?: XOR<SaleCreateWithoutVendorInput, SaleUncheckedCreateWithoutVendorInput> | SaleCreateWithoutVendorInput[] | SaleUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutVendorInput | SaleCreateOrConnectWithoutVendorInput[]
    upsert?: SaleUpsertWithWhereUniqueWithoutVendorInput | SaleUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: SaleCreateManyVendorInputEnvelope
    set?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    disconnect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    delete?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    update?: SaleUpdateWithWhereUniqueWithoutVendorInput | SaleUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: SaleUpdateManyWithWhereWithoutVendorInput | SaleUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: SaleScalarWhereInput | SaleScalarWhereInput[]
  }

  export type PaymentPeriodUpdateManyWithoutVendorNestedInput = {
    create?: XOR<PaymentPeriodCreateWithoutVendorInput, PaymentPeriodUncheckedCreateWithoutVendorInput> | PaymentPeriodCreateWithoutVendorInput[] | PaymentPeriodUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: PaymentPeriodCreateOrConnectWithoutVendorInput | PaymentPeriodCreateOrConnectWithoutVendorInput[]
    upsert?: PaymentPeriodUpsertWithWhereUniqueWithoutVendorInput | PaymentPeriodUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: PaymentPeriodCreateManyVendorInputEnvelope
    set?: PaymentPeriodWhereUniqueInput | PaymentPeriodWhereUniqueInput[]
    disconnect?: PaymentPeriodWhereUniqueInput | PaymentPeriodWhereUniqueInput[]
    delete?: PaymentPeriodWhereUniqueInput | PaymentPeriodWhereUniqueInput[]
    connect?: PaymentPeriodWhereUniqueInput | PaymentPeriodWhereUniqueInput[]
    update?: PaymentPeriodUpdateWithWhereUniqueWithoutVendorInput | PaymentPeriodUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: PaymentPeriodUpdateManyWithWhereWithoutVendorInput | PaymentPeriodUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: PaymentPeriodScalarWhereInput | PaymentPeriodScalarWhereInput[]
  }

  export type QrCodeUpdateManyWithoutVendorNestedInput = {
    create?: XOR<QrCodeCreateWithoutVendorInput, QrCodeUncheckedCreateWithoutVendorInput> | QrCodeCreateWithoutVendorInput[] | QrCodeUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: QrCodeCreateOrConnectWithoutVendorInput | QrCodeCreateOrConnectWithoutVendorInput[]
    upsert?: QrCodeUpsertWithWhereUniqueWithoutVendorInput | QrCodeUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: QrCodeCreateManyVendorInputEnvelope
    set?: QrCodeWhereUniqueInput | QrCodeWhereUniqueInput[]
    disconnect?: QrCodeWhereUniqueInput | QrCodeWhereUniqueInput[]
    delete?: QrCodeWhereUniqueInput | QrCodeWhereUniqueInput[]
    connect?: QrCodeWhereUniqueInput | QrCodeWhereUniqueInput[]
    update?: QrCodeUpdateWithWhereUniqueWithoutVendorInput | QrCodeUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: QrCodeUpdateManyWithWhereWithoutVendorInput | QrCodeUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: QrCodeScalarWhereInput | QrCodeScalarWhereInput[]
  }

  export type VendorNotificationUpdateManyWithoutVendorNestedInput = {
    create?: XOR<VendorNotificationCreateWithoutVendorInput, VendorNotificationUncheckedCreateWithoutVendorInput> | VendorNotificationCreateWithoutVendorInput[] | VendorNotificationUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: VendorNotificationCreateOrConnectWithoutVendorInput | VendorNotificationCreateOrConnectWithoutVendorInput[]
    upsert?: VendorNotificationUpsertWithWhereUniqueWithoutVendorInput | VendorNotificationUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: VendorNotificationCreateManyVendorInputEnvelope
    set?: VendorNotificationWhereUniqueInput | VendorNotificationWhereUniqueInput[]
    disconnect?: VendorNotificationWhereUniqueInput | VendorNotificationWhereUniqueInput[]
    delete?: VendorNotificationWhereUniqueInput | VendorNotificationWhereUniqueInput[]
    connect?: VendorNotificationWhereUniqueInput | VendorNotificationWhereUniqueInput[]
    update?: VendorNotificationUpdateWithWhereUniqueWithoutVendorInput | VendorNotificationUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: VendorNotificationUpdateManyWithWhereWithoutVendorInput | VendorNotificationUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: VendorNotificationScalarWhereInput | VendorNotificationScalarWhereInput[]
  }

  export type SaleUncheckedUpdateManyWithoutVendorNestedInput = {
    create?: XOR<SaleCreateWithoutVendorInput, SaleUncheckedCreateWithoutVendorInput> | SaleCreateWithoutVendorInput[] | SaleUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutVendorInput | SaleCreateOrConnectWithoutVendorInput[]
    upsert?: SaleUpsertWithWhereUniqueWithoutVendorInput | SaleUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: SaleCreateManyVendorInputEnvelope
    set?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    disconnect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    delete?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    update?: SaleUpdateWithWhereUniqueWithoutVendorInput | SaleUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: SaleUpdateManyWithWhereWithoutVendorInput | SaleUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: SaleScalarWhereInput | SaleScalarWhereInput[]
  }

  export type PaymentPeriodUncheckedUpdateManyWithoutVendorNestedInput = {
    create?: XOR<PaymentPeriodCreateWithoutVendorInput, PaymentPeriodUncheckedCreateWithoutVendorInput> | PaymentPeriodCreateWithoutVendorInput[] | PaymentPeriodUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: PaymentPeriodCreateOrConnectWithoutVendorInput | PaymentPeriodCreateOrConnectWithoutVendorInput[]
    upsert?: PaymentPeriodUpsertWithWhereUniqueWithoutVendorInput | PaymentPeriodUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: PaymentPeriodCreateManyVendorInputEnvelope
    set?: PaymentPeriodWhereUniqueInput | PaymentPeriodWhereUniqueInput[]
    disconnect?: PaymentPeriodWhereUniqueInput | PaymentPeriodWhereUniqueInput[]
    delete?: PaymentPeriodWhereUniqueInput | PaymentPeriodWhereUniqueInput[]
    connect?: PaymentPeriodWhereUniqueInput | PaymentPeriodWhereUniqueInput[]
    update?: PaymentPeriodUpdateWithWhereUniqueWithoutVendorInput | PaymentPeriodUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: PaymentPeriodUpdateManyWithWhereWithoutVendorInput | PaymentPeriodUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: PaymentPeriodScalarWhereInput | PaymentPeriodScalarWhereInput[]
  }

  export type QrCodeUncheckedUpdateManyWithoutVendorNestedInput = {
    create?: XOR<QrCodeCreateWithoutVendorInput, QrCodeUncheckedCreateWithoutVendorInput> | QrCodeCreateWithoutVendorInput[] | QrCodeUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: QrCodeCreateOrConnectWithoutVendorInput | QrCodeCreateOrConnectWithoutVendorInput[]
    upsert?: QrCodeUpsertWithWhereUniqueWithoutVendorInput | QrCodeUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: QrCodeCreateManyVendorInputEnvelope
    set?: QrCodeWhereUniqueInput | QrCodeWhereUniqueInput[]
    disconnect?: QrCodeWhereUniqueInput | QrCodeWhereUniqueInput[]
    delete?: QrCodeWhereUniqueInput | QrCodeWhereUniqueInput[]
    connect?: QrCodeWhereUniqueInput | QrCodeWhereUniqueInput[]
    update?: QrCodeUpdateWithWhereUniqueWithoutVendorInput | QrCodeUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: QrCodeUpdateManyWithWhereWithoutVendorInput | QrCodeUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: QrCodeScalarWhereInput | QrCodeScalarWhereInput[]
  }

  export type VendorNotificationUncheckedUpdateManyWithoutVendorNestedInput = {
    create?: XOR<VendorNotificationCreateWithoutVendorInput, VendorNotificationUncheckedCreateWithoutVendorInput> | VendorNotificationCreateWithoutVendorInput[] | VendorNotificationUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: VendorNotificationCreateOrConnectWithoutVendorInput | VendorNotificationCreateOrConnectWithoutVendorInput[]
    upsert?: VendorNotificationUpsertWithWhereUniqueWithoutVendorInput | VendorNotificationUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: VendorNotificationCreateManyVendorInputEnvelope
    set?: VendorNotificationWhereUniqueInput | VendorNotificationWhereUniqueInput[]
    disconnect?: VendorNotificationWhereUniqueInput | VendorNotificationWhereUniqueInput[]
    delete?: VendorNotificationWhereUniqueInput | VendorNotificationWhereUniqueInput[]
    connect?: VendorNotificationWhereUniqueInput | VendorNotificationWhereUniqueInput[]
    update?: VendorNotificationUpdateWithWhereUniqueWithoutVendorInput | VendorNotificationUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: VendorNotificationUpdateManyWithWhereWithoutVendorInput | VendorNotificationUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: VendorNotificationScalarWhereInput | VendorNotificationScalarWhereInput[]
  }

  export type DelegueQrCodeCreateNestedManyWithoutDelegueInput = {
    create?: XOR<DelegueQrCodeCreateWithoutDelegueInput, DelegueQrCodeUncheckedCreateWithoutDelegueInput> | DelegueQrCodeCreateWithoutDelegueInput[] | DelegueQrCodeUncheckedCreateWithoutDelegueInput[]
    connectOrCreate?: DelegueQrCodeCreateOrConnectWithoutDelegueInput | DelegueQrCodeCreateOrConnectWithoutDelegueInput[]
    createMany?: DelegueQrCodeCreateManyDelegueInputEnvelope
    connect?: DelegueQrCodeWhereUniqueInput | DelegueQrCodeWhereUniqueInput[]
  }

  export type DelegueNotificationCreateNestedManyWithoutDelegueInput = {
    create?: XOR<DelegueNotificationCreateWithoutDelegueInput, DelegueNotificationUncheckedCreateWithoutDelegueInput> | DelegueNotificationCreateWithoutDelegueInput[] | DelegueNotificationUncheckedCreateWithoutDelegueInput[]
    connectOrCreate?: DelegueNotificationCreateOrConnectWithoutDelegueInput | DelegueNotificationCreateOrConnectWithoutDelegueInput[]
    createMany?: DelegueNotificationCreateManyDelegueInputEnvelope
    connect?: DelegueNotificationWhereUniqueInput | DelegueNotificationWhereUniqueInput[]
  }

  export type DelegueQrCodeUncheckedCreateNestedManyWithoutDelegueInput = {
    create?: XOR<DelegueQrCodeCreateWithoutDelegueInput, DelegueQrCodeUncheckedCreateWithoutDelegueInput> | DelegueQrCodeCreateWithoutDelegueInput[] | DelegueQrCodeUncheckedCreateWithoutDelegueInput[]
    connectOrCreate?: DelegueQrCodeCreateOrConnectWithoutDelegueInput | DelegueQrCodeCreateOrConnectWithoutDelegueInput[]
    createMany?: DelegueQrCodeCreateManyDelegueInputEnvelope
    connect?: DelegueQrCodeWhereUniqueInput | DelegueQrCodeWhereUniqueInput[]
  }

  export type DelegueNotificationUncheckedCreateNestedManyWithoutDelegueInput = {
    create?: XOR<DelegueNotificationCreateWithoutDelegueInput, DelegueNotificationUncheckedCreateWithoutDelegueInput> | DelegueNotificationCreateWithoutDelegueInput[] | DelegueNotificationUncheckedCreateWithoutDelegueInput[]
    connectOrCreate?: DelegueNotificationCreateOrConnectWithoutDelegueInput | DelegueNotificationCreateOrConnectWithoutDelegueInput[]
    createMany?: DelegueNotificationCreateManyDelegueInputEnvelope
    connect?: DelegueNotificationWhereUniqueInput | DelegueNotificationWhereUniqueInput[]
  }

  export type DelegueQrCodeUpdateManyWithoutDelegueNestedInput = {
    create?: XOR<DelegueQrCodeCreateWithoutDelegueInput, DelegueQrCodeUncheckedCreateWithoutDelegueInput> | DelegueQrCodeCreateWithoutDelegueInput[] | DelegueQrCodeUncheckedCreateWithoutDelegueInput[]
    connectOrCreate?: DelegueQrCodeCreateOrConnectWithoutDelegueInput | DelegueQrCodeCreateOrConnectWithoutDelegueInput[]
    upsert?: DelegueQrCodeUpsertWithWhereUniqueWithoutDelegueInput | DelegueQrCodeUpsertWithWhereUniqueWithoutDelegueInput[]
    createMany?: DelegueQrCodeCreateManyDelegueInputEnvelope
    set?: DelegueQrCodeWhereUniqueInput | DelegueQrCodeWhereUniqueInput[]
    disconnect?: DelegueQrCodeWhereUniqueInput | DelegueQrCodeWhereUniqueInput[]
    delete?: DelegueQrCodeWhereUniqueInput | DelegueQrCodeWhereUniqueInput[]
    connect?: DelegueQrCodeWhereUniqueInput | DelegueQrCodeWhereUniqueInput[]
    update?: DelegueQrCodeUpdateWithWhereUniqueWithoutDelegueInput | DelegueQrCodeUpdateWithWhereUniqueWithoutDelegueInput[]
    updateMany?: DelegueQrCodeUpdateManyWithWhereWithoutDelegueInput | DelegueQrCodeUpdateManyWithWhereWithoutDelegueInput[]
    deleteMany?: DelegueQrCodeScalarWhereInput | DelegueQrCodeScalarWhereInput[]
  }

  export type DelegueNotificationUpdateManyWithoutDelegueNestedInput = {
    create?: XOR<DelegueNotificationCreateWithoutDelegueInput, DelegueNotificationUncheckedCreateWithoutDelegueInput> | DelegueNotificationCreateWithoutDelegueInput[] | DelegueNotificationUncheckedCreateWithoutDelegueInput[]
    connectOrCreate?: DelegueNotificationCreateOrConnectWithoutDelegueInput | DelegueNotificationCreateOrConnectWithoutDelegueInput[]
    upsert?: DelegueNotificationUpsertWithWhereUniqueWithoutDelegueInput | DelegueNotificationUpsertWithWhereUniqueWithoutDelegueInput[]
    createMany?: DelegueNotificationCreateManyDelegueInputEnvelope
    set?: DelegueNotificationWhereUniqueInput | DelegueNotificationWhereUniqueInput[]
    disconnect?: DelegueNotificationWhereUniqueInput | DelegueNotificationWhereUniqueInput[]
    delete?: DelegueNotificationWhereUniqueInput | DelegueNotificationWhereUniqueInput[]
    connect?: DelegueNotificationWhereUniqueInput | DelegueNotificationWhereUniqueInput[]
    update?: DelegueNotificationUpdateWithWhereUniqueWithoutDelegueInput | DelegueNotificationUpdateWithWhereUniqueWithoutDelegueInput[]
    updateMany?: DelegueNotificationUpdateManyWithWhereWithoutDelegueInput | DelegueNotificationUpdateManyWithWhereWithoutDelegueInput[]
    deleteMany?: DelegueNotificationScalarWhereInput | DelegueNotificationScalarWhereInput[]
  }

  export type DelegueQrCodeUncheckedUpdateManyWithoutDelegueNestedInput = {
    create?: XOR<DelegueQrCodeCreateWithoutDelegueInput, DelegueQrCodeUncheckedCreateWithoutDelegueInput> | DelegueQrCodeCreateWithoutDelegueInput[] | DelegueQrCodeUncheckedCreateWithoutDelegueInput[]
    connectOrCreate?: DelegueQrCodeCreateOrConnectWithoutDelegueInput | DelegueQrCodeCreateOrConnectWithoutDelegueInput[]
    upsert?: DelegueQrCodeUpsertWithWhereUniqueWithoutDelegueInput | DelegueQrCodeUpsertWithWhereUniqueWithoutDelegueInput[]
    createMany?: DelegueQrCodeCreateManyDelegueInputEnvelope
    set?: DelegueQrCodeWhereUniqueInput | DelegueQrCodeWhereUniqueInput[]
    disconnect?: DelegueQrCodeWhereUniqueInput | DelegueQrCodeWhereUniqueInput[]
    delete?: DelegueQrCodeWhereUniqueInput | DelegueQrCodeWhereUniqueInput[]
    connect?: DelegueQrCodeWhereUniqueInput | DelegueQrCodeWhereUniqueInput[]
    update?: DelegueQrCodeUpdateWithWhereUniqueWithoutDelegueInput | DelegueQrCodeUpdateWithWhereUniqueWithoutDelegueInput[]
    updateMany?: DelegueQrCodeUpdateManyWithWhereWithoutDelegueInput | DelegueQrCodeUpdateManyWithWhereWithoutDelegueInput[]
    deleteMany?: DelegueQrCodeScalarWhereInput | DelegueQrCodeScalarWhereInput[]
  }

  export type DelegueNotificationUncheckedUpdateManyWithoutDelegueNestedInput = {
    create?: XOR<DelegueNotificationCreateWithoutDelegueInput, DelegueNotificationUncheckedCreateWithoutDelegueInput> | DelegueNotificationCreateWithoutDelegueInput[] | DelegueNotificationUncheckedCreateWithoutDelegueInput[]
    connectOrCreate?: DelegueNotificationCreateOrConnectWithoutDelegueInput | DelegueNotificationCreateOrConnectWithoutDelegueInput[]
    upsert?: DelegueNotificationUpsertWithWhereUniqueWithoutDelegueInput | DelegueNotificationUpsertWithWhereUniqueWithoutDelegueInput[]
    createMany?: DelegueNotificationCreateManyDelegueInputEnvelope
    set?: DelegueNotificationWhereUniqueInput | DelegueNotificationWhereUniqueInput[]
    disconnect?: DelegueNotificationWhereUniqueInput | DelegueNotificationWhereUniqueInput[]
    delete?: DelegueNotificationWhereUniqueInput | DelegueNotificationWhereUniqueInput[]
    connect?: DelegueNotificationWhereUniqueInput | DelegueNotificationWhereUniqueInput[]
    update?: DelegueNotificationUpdateWithWhereUniqueWithoutDelegueInput | DelegueNotificationUpdateWithWhereUniqueWithoutDelegueInput[]
    updateMany?: DelegueNotificationUpdateManyWithWhereWithoutDelegueInput | DelegueNotificationUpdateManyWithWhereWithoutDelegueInput[]
    deleteMany?: DelegueNotificationScalarWhereInput | DelegueNotificationScalarWhereInput[]
  }

  export type DelegueCreateNestedOneWithoutQrCodesInput = {
    create?: XOR<DelegueCreateWithoutQrCodesInput, DelegueUncheckedCreateWithoutQrCodesInput>
    connectOrCreate?: DelegueCreateOrConnectWithoutQrCodesInput
    connect?: DelegueWhereUniqueInput
  }

  export type DelegueUpdateOneRequiredWithoutQrCodesNestedInput = {
    create?: XOR<DelegueCreateWithoutQrCodesInput, DelegueUncheckedCreateWithoutQrCodesInput>
    connectOrCreate?: DelegueCreateOrConnectWithoutQrCodesInput
    upsert?: DelegueUpsertWithoutQrCodesInput
    connect?: DelegueWhereUniqueInput
    update?: XOR<XOR<DelegueUpdateToOneWithWhereWithoutQrCodesInput, DelegueUpdateWithoutQrCodesInput>, DelegueUncheckedUpdateWithoutQrCodesInput>
  }

  export type SaleCreateNestedManyWithoutProductInput = {
    create?: XOR<SaleCreateWithoutProductInput, SaleUncheckedCreateWithoutProductInput> | SaleCreateWithoutProductInput[] | SaleUncheckedCreateWithoutProductInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutProductInput | SaleCreateOrConnectWithoutProductInput[]
    createMany?: SaleCreateManyProductInputEnvelope
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
  }

  export type SaleUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<SaleCreateWithoutProductInput, SaleUncheckedCreateWithoutProductInput> | SaleCreateWithoutProductInput[] | SaleUncheckedCreateWithoutProductInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutProductInput | SaleCreateOrConnectWithoutProductInput[]
    createMany?: SaleCreateManyProductInputEnvelope
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SaleUpdateManyWithoutProductNestedInput = {
    create?: XOR<SaleCreateWithoutProductInput, SaleUncheckedCreateWithoutProductInput> | SaleCreateWithoutProductInput[] | SaleUncheckedCreateWithoutProductInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutProductInput | SaleCreateOrConnectWithoutProductInput[]
    upsert?: SaleUpsertWithWhereUniqueWithoutProductInput | SaleUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: SaleCreateManyProductInputEnvelope
    set?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    disconnect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    delete?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    update?: SaleUpdateWithWhereUniqueWithoutProductInput | SaleUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: SaleUpdateManyWithWhereWithoutProductInput | SaleUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: SaleScalarWhereInput | SaleScalarWhereInput[]
  }

  export type SaleUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<SaleCreateWithoutProductInput, SaleUncheckedCreateWithoutProductInput> | SaleCreateWithoutProductInput[] | SaleUncheckedCreateWithoutProductInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutProductInput | SaleCreateOrConnectWithoutProductInput[]
    upsert?: SaleUpsertWithWhereUniqueWithoutProductInput | SaleUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: SaleCreateManyProductInputEnvelope
    set?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    disconnect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    delete?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    update?: SaleUpdateWithWhereUniqueWithoutProductInput | SaleUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: SaleUpdateManyWithWhereWithoutProductInput | SaleUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: SaleScalarWhereInput | SaleScalarWhereInput[]
  }

  export type VendorCreateNestedOneWithoutSalesInput = {
    create?: XOR<VendorCreateWithoutSalesInput, VendorUncheckedCreateWithoutSalesInput>
    connectOrCreate?: VendorCreateOrConnectWithoutSalesInput
    connect?: VendorWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutSalesInput = {
    create?: XOR<ProductCreateWithoutSalesInput, ProductUncheckedCreateWithoutSalesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutSalesInput
    connect?: ProductWhereUniqueInput
  }

  export type PaymentPeriodCreateNestedOneWithoutSalesInput = {
    create?: XOR<PaymentPeriodCreateWithoutSalesInput, PaymentPeriodUncheckedCreateWithoutSalesInput>
    connectOrCreate?: PaymentPeriodCreateOrConnectWithoutSalesInput
    connect?: PaymentPeriodWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type VendorUpdateOneRequiredWithoutSalesNestedInput = {
    create?: XOR<VendorCreateWithoutSalesInput, VendorUncheckedCreateWithoutSalesInput>
    connectOrCreate?: VendorCreateOrConnectWithoutSalesInput
    upsert?: VendorUpsertWithoutSalesInput
    connect?: VendorWhereUniqueInput
    update?: XOR<XOR<VendorUpdateToOneWithWhereWithoutSalesInput, VendorUpdateWithoutSalesInput>, VendorUncheckedUpdateWithoutSalesInput>
  }

  export type ProductUpdateOneWithoutSalesNestedInput = {
    create?: XOR<ProductCreateWithoutSalesInput, ProductUncheckedCreateWithoutSalesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutSalesInput
    upsert?: ProductUpsertWithoutSalesInput
    disconnect?: ProductWhereInput | boolean
    delete?: ProductWhereInput | boolean
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutSalesInput, ProductUpdateWithoutSalesInput>, ProductUncheckedUpdateWithoutSalesInput>
  }

  export type PaymentPeriodUpdateOneWithoutSalesNestedInput = {
    create?: XOR<PaymentPeriodCreateWithoutSalesInput, PaymentPeriodUncheckedCreateWithoutSalesInput>
    connectOrCreate?: PaymentPeriodCreateOrConnectWithoutSalesInput
    upsert?: PaymentPeriodUpsertWithoutSalesInput
    disconnect?: PaymentPeriodWhereInput | boolean
    delete?: PaymentPeriodWhereInput | boolean
    connect?: PaymentPeriodWhereUniqueInput
    update?: XOR<XOR<PaymentPeriodUpdateToOneWithWhereWithoutSalesInput, PaymentPeriodUpdateWithoutSalesInput>, PaymentPeriodUncheckedUpdateWithoutSalesInput>
  }

  export type VendorCreateNestedOneWithoutPaymentPeriodsInput = {
    create?: XOR<VendorCreateWithoutPaymentPeriodsInput, VendorUncheckedCreateWithoutPaymentPeriodsInput>
    connectOrCreate?: VendorCreateOrConnectWithoutPaymentPeriodsInput
    connect?: VendorWhereUniqueInput
  }

  export type SaleCreateNestedManyWithoutPeriodInput = {
    create?: XOR<SaleCreateWithoutPeriodInput, SaleUncheckedCreateWithoutPeriodInput> | SaleCreateWithoutPeriodInput[] | SaleUncheckedCreateWithoutPeriodInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutPeriodInput | SaleCreateOrConnectWithoutPeriodInput[]
    createMany?: SaleCreateManyPeriodInputEnvelope
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
  }

  export type SaleUncheckedCreateNestedManyWithoutPeriodInput = {
    create?: XOR<SaleCreateWithoutPeriodInput, SaleUncheckedCreateWithoutPeriodInput> | SaleCreateWithoutPeriodInput[] | SaleUncheckedCreateWithoutPeriodInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutPeriodInput | SaleCreateOrConnectWithoutPeriodInput[]
    createMany?: SaleCreateManyPeriodInputEnvelope
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type VendorUpdateOneRequiredWithoutPaymentPeriodsNestedInput = {
    create?: XOR<VendorCreateWithoutPaymentPeriodsInput, VendorUncheckedCreateWithoutPaymentPeriodsInput>
    connectOrCreate?: VendorCreateOrConnectWithoutPaymentPeriodsInput
    upsert?: VendorUpsertWithoutPaymentPeriodsInput
    connect?: VendorWhereUniqueInput
    update?: XOR<XOR<VendorUpdateToOneWithWhereWithoutPaymentPeriodsInput, VendorUpdateWithoutPaymentPeriodsInput>, VendorUncheckedUpdateWithoutPaymentPeriodsInput>
  }

  export type SaleUpdateManyWithoutPeriodNestedInput = {
    create?: XOR<SaleCreateWithoutPeriodInput, SaleUncheckedCreateWithoutPeriodInput> | SaleCreateWithoutPeriodInput[] | SaleUncheckedCreateWithoutPeriodInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutPeriodInput | SaleCreateOrConnectWithoutPeriodInput[]
    upsert?: SaleUpsertWithWhereUniqueWithoutPeriodInput | SaleUpsertWithWhereUniqueWithoutPeriodInput[]
    createMany?: SaleCreateManyPeriodInputEnvelope
    set?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    disconnect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    delete?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    update?: SaleUpdateWithWhereUniqueWithoutPeriodInput | SaleUpdateWithWhereUniqueWithoutPeriodInput[]
    updateMany?: SaleUpdateManyWithWhereWithoutPeriodInput | SaleUpdateManyWithWhereWithoutPeriodInput[]
    deleteMany?: SaleScalarWhereInput | SaleScalarWhereInput[]
  }

  export type SaleUncheckedUpdateManyWithoutPeriodNestedInput = {
    create?: XOR<SaleCreateWithoutPeriodInput, SaleUncheckedCreateWithoutPeriodInput> | SaleCreateWithoutPeriodInput[] | SaleUncheckedCreateWithoutPeriodInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutPeriodInput | SaleCreateOrConnectWithoutPeriodInput[]
    upsert?: SaleUpsertWithWhereUniqueWithoutPeriodInput | SaleUpsertWithWhereUniqueWithoutPeriodInput[]
    createMany?: SaleCreateManyPeriodInputEnvelope
    set?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    disconnect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    delete?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    update?: SaleUpdateWithWhereUniqueWithoutPeriodInput | SaleUpdateWithWhereUniqueWithoutPeriodInput[]
    updateMany?: SaleUpdateManyWithWhereWithoutPeriodInput | SaleUpdateManyWithWhereWithoutPeriodInput[]
    deleteMany?: SaleScalarWhereInput | SaleScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type VendorCreateNestedOneWithoutQrCodesInput = {
    create?: XOR<VendorCreateWithoutQrCodesInput, VendorUncheckedCreateWithoutQrCodesInput>
    connectOrCreate?: VendorCreateOrConnectWithoutQrCodesInput
    connect?: VendorWhereUniqueInput
  }

  export type VendorUpdateOneRequiredWithoutQrCodesNestedInput = {
    create?: XOR<VendorCreateWithoutQrCodesInput, VendorUncheckedCreateWithoutQrCodesInput>
    connectOrCreate?: VendorCreateOrConnectWithoutQrCodesInput
    upsert?: VendorUpsertWithoutQrCodesInput
    connect?: VendorWhereUniqueInput
    update?: XOR<XOR<VendorUpdateToOneWithWhereWithoutQrCodesInput, VendorUpdateWithoutQrCodesInput>, VendorUncheckedUpdateWithoutQrCodesInput>
  }

  export type VendorNotificationCreateNestedManyWithoutNotificationInput = {
    create?: XOR<VendorNotificationCreateWithoutNotificationInput, VendorNotificationUncheckedCreateWithoutNotificationInput> | VendorNotificationCreateWithoutNotificationInput[] | VendorNotificationUncheckedCreateWithoutNotificationInput[]
    connectOrCreate?: VendorNotificationCreateOrConnectWithoutNotificationInput | VendorNotificationCreateOrConnectWithoutNotificationInput[]
    createMany?: VendorNotificationCreateManyNotificationInputEnvelope
    connect?: VendorNotificationWhereUniqueInput | VendorNotificationWhereUniqueInput[]
  }

  export type DelegueNotificationCreateNestedManyWithoutNotificationInput = {
    create?: XOR<DelegueNotificationCreateWithoutNotificationInput, DelegueNotificationUncheckedCreateWithoutNotificationInput> | DelegueNotificationCreateWithoutNotificationInput[] | DelegueNotificationUncheckedCreateWithoutNotificationInput[]
    connectOrCreate?: DelegueNotificationCreateOrConnectWithoutNotificationInput | DelegueNotificationCreateOrConnectWithoutNotificationInput[]
    createMany?: DelegueNotificationCreateManyNotificationInputEnvelope
    connect?: DelegueNotificationWhereUniqueInput | DelegueNotificationWhereUniqueInput[]
  }

  export type VendorNotificationUncheckedCreateNestedManyWithoutNotificationInput = {
    create?: XOR<VendorNotificationCreateWithoutNotificationInput, VendorNotificationUncheckedCreateWithoutNotificationInput> | VendorNotificationCreateWithoutNotificationInput[] | VendorNotificationUncheckedCreateWithoutNotificationInput[]
    connectOrCreate?: VendorNotificationCreateOrConnectWithoutNotificationInput | VendorNotificationCreateOrConnectWithoutNotificationInput[]
    createMany?: VendorNotificationCreateManyNotificationInputEnvelope
    connect?: VendorNotificationWhereUniqueInput | VendorNotificationWhereUniqueInput[]
  }

  export type DelegueNotificationUncheckedCreateNestedManyWithoutNotificationInput = {
    create?: XOR<DelegueNotificationCreateWithoutNotificationInput, DelegueNotificationUncheckedCreateWithoutNotificationInput> | DelegueNotificationCreateWithoutNotificationInput[] | DelegueNotificationUncheckedCreateWithoutNotificationInput[]
    connectOrCreate?: DelegueNotificationCreateOrConnectWithoutNotificationInput | DelegueNotificationCreateOrConnectWithoutNotificationInput[]
    createMany?: DelegueNotificationCreateManyNotificationInputEnvelope
    connect?: DelegueNotificationWhereUniqueInput | DelegueNotificationWhereUniqueInput[]
  }

  export type VendorNotificationUpdateManyWithoutNotificationNestedInput = {
    create?: XOR<VendorNotificationCreateWithoutNotificationInput, VendorNotificationUncheckedCreateWithoutNotificationInput> | VendorNotificationCreateWithoutNotificationInput[] | VendorNotificationUncheckedCreateWithoutNotificationInput[]
    connectOrCreate?: VendorNotificationCreateOrConnectWithoutNotificationInput | VendorNotificationCreateOrConnectWithoutNotificationInput[]
    upsert?: VendorNotificationUpsertWithWhereUniqueWithoutNotificationInput | VendorNotificationUpsertWithWhereUniqueWithoutNotificationInput[]
    createMany?: VendorNotificationCreateManyNotificationInputEnvelope
    set?: VendorNotificationWhereUniqueInput | VendorNotificationWhereUniqueInput[]
    disconnect?: VendorNotificationWhereUniqueInput | VendorNotificationWhereUniqueInput[]
    delete?: VendorNotificationWhereUniqueInput | VendorNotificationWhereUniqueInput[]
    connect?: VendorNotificationWhereUniqueInput | VendorNotificationWhereUniqueInput[]
    update?: VendorNotificationUpdateWithWhereUniqueWithoutNotificationInput | VendorNotificationUpdateWithWhereUniqueWithoutNotificationInput[]
    updateMany?: VendorNotificationUpdateManyWithWhereWithoutNotificationInput | VendorNotificationUpdateManyWithWhereWithoutNotificationInput[]
    deleteMany?: VendorNotificationScalarWhereInput | VendorNotificationScalarWhereInput[]
  }

  export type DelegueNotificationUpdateManyWithoutNotificationNestedInput = {
    create?: XOR<DelegueNotificationCreateWithoutNotificationInput, DelegueNotificationUncheckedCreateWithoutNotificationInput> | DelegueNotificationCreateWithoutNotificationInput[] | DelegueNotificationUncheckedCreateWithoutNotificationInput[]
    connectOrCreate?: DelegueNotificationCreateOrConnectWithoutNotificationInput | DelegueNotificationCreateOrConnectWithoutNotificationInput[]
    upsert?: DelegueNotificationUpsertWithWhereUniqueWithoutNotificationInput | DelegueNotificationUpsertWithWhereUniqueWithoutNotificationInput[]
    createMany?: DelegueNotificationCreateManyNotificationInputEnvelope
    set?: DelegueNotificationWhereUniqueInput | DelegueNotificationWhereUniqueInput[]
    disconnect?: DelegueNotificationWhereUniqueInput | DelegueNotificationWhereUniqueInput[]
    delete?: DelegueNotificationWhereUniqueInput | DelegueNotificationWhereUniqueInput[]
    connect?: DelegueNotificationWhereUniqueInput | DelegueNotificationWhereUniqueInput[]
    update?: DelegueNotificationUpdateWithWhereUniqueWithoutNotificationInput | DelegueNotificationUpdateWithWhereUniqueWithoutNotificationInput[]
    updateMany?: DelegueNotificationUpdateManyWithWhereWithoutNotificationInput | DelegueNotificationUpdateManyWithWhereWithoutNotificationInput[]
    deleteMany?: DelegueNotificationScalarWhereInput | DelegueNotificationScalarWhereInput[]
  }

  export type VendorNotificationUncheckedUpdateManyWithoutNotificationNestedInput = {
    create?: XOR<VendorNotificationCreateWithoutNotificationInput, VendorNotificationUncheckedCreateWithoutNotificationInput> | VendorNotificationCreateWithoutNotificationInput[] | VendorNotificationUncheckedCreateWithoutNotificationInput[]
    connectOrCreate?: VendorNotificationCreateOrConnectWithoutNotificationInput | VendorNotificationCreateOrConnectWithoutNotificationInput[]
    upsert?: VendorNotificationUpsertWithWhereUniqueWithoutNotificationInput | VendorNotificationUpsertWithWhereUniqueWithoutNotificationInput[]
    createMany?: VendorNotificationCreateManyNotificationInputEnvelope
    set?: VendorNotificationWhereUniqueInput | VendorNotificationWhereUniqueInput[]
    disconnect?: VendorNotificationWhereUniqueInput | VendorNotificationWhereUniqueInput[]
    delete?: VendorNotificationWhereUniqueInput | VendorNotificationWhereUniqueInput[]
    connect?: VendorNotificationWhereUniqueInput | VendorNotificationWhereUniqueInput[]
    update?: VendorNotificationUpdateWithWhereUniqueWithoutNotificationInput | VendorNotificationUpdateWithWhereUniqueWithoutNotificationInput[]
    updateMany?: VendorNotificationUpdateManyWithWhereWithoutNotificationInput | VendorNotificationUpdateManyWithWhereWithoutNotificationInput[]
    deleteMany?: VendorNotificationScalarWhereInput | VendorNotificationScalarWhereInput[]
  }

  export type DelegueNotificationUncheckedUpdateManyWithoutNotificationNestedInput = {
    create?: XOR<DelegueNotificationCreateWithoutNotificationInput, DelegueNotificationUncheckedCreateWithoutNotificationInput> | DelegueNotificationCreateWithoutNotificationInput[] | DelegueNotificationUncheckedCreateWithoutNotificationInput[]
    connectOrCreate?: DelegueNotificationCreateOrConnectWithoutNotificationInput | DelegueNotificationCreateOrConnectWithoutNotificationInput[]
    upsert?: DelegueNotificationUpsertWithWhereUniqueWithoutNotificationInput | DelegueNotificationUpsertWithWhereUniqueWithoutNotificationInput[]
    createMany?: DelegueNotificationCreateManyNotificationInputEnvelope
    set?: DelegueNotificationWhereUniqueInput | DelegueNotificationWhereUniqueInput[]
    disconnect?: DelegueNotificationWhereUniqueInput | DelegueNotificationWhereUniqueInput[]
    delete?: DelegueNotificationWhereUniqueInput | DelegueNotificationWhereUniqueInput[]
    connect?: DelegueNotificationWhereUniqueInput | DelegueNotificationWhereUniqueInput[]
    update?: DelegueNotificationUpdateWithWhereUniqueWithoutNotificationInput | DelegueNotificationUpdateWithWhereUniqueWithoutNotificationInput[]
    updateMany?: DelegueNotificationUpdateManyWithWhereWithoutNotificationInput | DelegueNotificationUpdateManyWithWhereWithoutNotificationInput[]
    deleteMany?: DelegueNotificationScalarWhereInput | DelegueNotificationScalarWhereInput[]
  }

  export type NotificationCreateNestedOneWithoutVendorNotificationsInput = {
    create?: XOR<NotificationCreateWithoutVendorNotificationsInput, NotificationUncheckedCreateWithoutVendorNotificationsInput>
    connectOrCreate?: NotificationCreateOrConnectWithoutVendorNotificationsInput
    connect?: NotificationWhereUniqueInput
  }

  export type VendorCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<VendorCreateWithoutNotificationsInput, VendorUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: VendorCreateOrConnectWithoutNotificationsInput
    connect?: VendorWhereUniqueInput
  }

  export type NotificationUpdateOneRequiredWithoutVendorNotificationsNestedInput = {
    create?: XOR<NotificationCreateWithoutVendorNotificationsInput, NotificationUncheckedCreateWithoutVendorNotificationsInput>
    connectOrCreate?: NotificationCreateOrConnectWithoutVendorNotificationsInput
    upsert?: NotificationUpsertWithoutVendorNotificationsInput
    connect?: NotificationWhereUniqueInput
    update?: XOR<XOR<NotificationUpdateToOneWithWhereWithoutVendorNotificationsInput, NotificationUpdateWithoutVendorNotificationsInput>, NotificationUncheckedUpdateWithoutVendorNotificationsInput>
  }

  export type VendorUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<VendorCreateWithoutNotificationsInput, VendorUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: VendorCreateOrConnectWithoutNotificationsInput
    upsert?: VendorUpsertWithoutNotificationsInput
    connect?: VendorWhereUniqueInput
    update?: XOR<XOR<VendorUpdateToOneWithWhereWithoutNotificationsInput, VendorUpdateWithoutNotificationsInput>, VendorUncheckedUpdateWithoutNotificationsInput>
  }

  export type NotificationCreateNestedOneWithoutDelegueNotificationsInput = {
    create?: XOR<NotificationCreateWithoutDelegueNotificationsInput, NotificationUncheckedCreateWithoutDelegueNotificationsInput>
    connectOrCreate?: NotificationCreateOrConnectWithoutDelegueNotificationsInput
    connect?: NotificationWhereUniqueInput
  }

  export type DelegueCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<DelegueCreateWithoutNotificationsInput, DelegueUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: DelegueCreateOrConnectWithoutNotificationsInput
    connect?: DelegueWhereUniqueInput
  }

  export type NotificationUpdateOneRequiredWithoutDelegueNotificationsNestedInput = {
    create?: XOR<NotificationCreateWithoutDelegueNotificationsInput, NotificationUncheckedCreateWithoutDelegueNotificationsInput>
    connectOrCreate?: NotificationCreateOrConnectWithoutDelegueNotificationsInput
    upsert?: NotificationUpsertWithoutDelegueNotificationsInput
    connect?: NotificationWhereUniqueInput
    update?: XOR<XOR<NotificationUpdateToOneWithWhereWithoutDelegueNotificationsInput, NotificationUpdateWithoutDelegueNotificationsInput>, NotificationUncheckedUpdateWithoutDelegueNotificationsInput>
  }

  export type DelegueUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<DelegueCreateWithoutNotificationsInput, DelegueUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: DelegueCreateOrConnectWithoutNotificationsInput
    upsert?: DelegueUpsertWithoutNotificationsInput
    connect?: DelegueWhereUniqueInput
    update?: XOR<XOR<DelegueUpdateToOneWithWhereWithoutNotificationsInput, DelegueUpdateWithoutNotificationsInput>, DelegueUncheckedUpdateWithoutNotificationsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type VendorCreateWithoutPharmacyInput = {
    id?: string
    uniqueCardNumber: string
    name?: string | null
    email?: string | null
    phone?: string | null
    ccp?: string | null
    ccpKey?: string | null
    rip?: string | null
    status?: string
    actionDate?: Date | string
    registrationBonus?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sales?: SaleCreateNestedManyWithoutVendorInput
    paymentPeriods?: PaymentPeriodCreateNestedManyWithoutVendorInput
    qrCodes?: QrCodeCreateNestedManyWithoutVendorInput
    notifications?: VendorNotificationCreateNestedManyWithoutVendorInput
  }

  export type VendorUncheckedCreateWithoutPharmacyInput = {
    id?: string
    uniqueCardNumber: string
    name?: string | null
    email?: string | null
    phone?: string | null
    ccp?: string | null
    ccpKey?: string | null
    rip?: string | null
    status?: string
    actionDate?: Date | string
    registrationBonus?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sales?: SaleUncheckedCreateNestedManyWithoutVendorInput
    paymentPeriods?: PaymentPeriodUncheckedCreateNestedManyWithoutVendorInput
    qrCodes?: QrCodeUncheckedCreateNestedManyWithoutVendorInput
    notifications?: VendorNotificationUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorCreateOrConnectWithoutPharmacyInput = {
    where: VendorWhereUniqueInput
    create: XOR<VendorCreateWithoutPharmacyInput, VendorUncheckedCreateWithoutPharmacyInput>
  }

  export type VendorCreateManyPharmacyInputEnvelope = {
    data: VendorCreateManyPharmacyInput | VendorCreateManyPharmacyInput[]
    skipDuplicates?: boolean
  }

  export type VendorUpsertWithWhereUniqueWithoutPharmacyInput = {
    where: VendorWhereUniqueInput
    update: XOR<VendorUpdateWithoutPharmacyInput, VendorUncheckedUpdateWithoutPharmacyInput>
    create: XOR<VendorCreateWithoutPharmacyInput, VendorUncheckedCreateWithoutPharmacyInput>
  }

  export type VendorUpdateWithWhereUniqueWithoutPharmacyInput = {
    where: VendorWhereUniqueInput
    data: XOR<VendorUpdateWithoutPharmacyInput, VendorUncheckedUpdateWithoutPharmacyInput>
  }

  export type VendorUpdateManyWithWhereWithoutPharmacyInput = {
    where: VendorScalarWhereInput
    data: XOR<VendorUpdateManyMutationInput, VendorUncheckedUpdateManyWithoutPharmacyInput>
  }

  export type VendorScalarWhereInput = {
    AND?: VendorScalarWhereInput | VendorScalarWhereInput[]
    OR?: VendorScalarWhereInput[]
    NOT?: VendorScalarWhereInput | VendorScalarWhereInput[]
    id?: StringFilter<"Vendor"> | string
    uniqueCardNumber?: StringFilter<"Vendor"> | string
    name?: StringNullableFilter<"Vendor"> | string | null
    email?: StringNullableFilter<"Vendor"> | string | null
    phone?: StringNullableFilter<"Vendor"> | string | null
    ccp?: StringNullableFilter<"Vendor"> | string | null
    ccpKey?: StringNullableFilter<"Vendor"> | string | null
    rip?: StringNullableFilter<"Vendor"> | string | null
    pharmacyId?: StringNullableFilter<"Vendor"> | string | null
    status?: StringFilter<"Vendor"> | string
    actionDate?: DateTimeFilter<"Vendor"> | Date | string
    registrationBonus?: BoolFilter<"Vendor"> | boolean
    createdAt?: DateTimeFilter<"Vendor"> | Date | string
    updatedAt?: DateTimeFilter<"Vendor"> | Date | string
  }

  export type PharmacyCreateWithoutVendorsInput = {
    id?: string
    name: string
    address?: string | null
    phone?: string | null
    region?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PharmacyUncheckedCreateWithoutVendorsInput = {
    id?: string
    name: string
    address?: string | null
    phone?: string | null
    region?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PharmacyCreateOrConnectWithoutVendorsInput = {
    where: PharmacyWhereUniqueInput
    create: XOR<PharmacyCreateWithoutVendorsInput, PharmacyUncheckedCreateWithoutVendorsInput>
  }

  export type SaleCreateWithoutVendorInput = {
    id?: string
    productName: string
    quantity: number
    unitPrice?: number
    saleDate?: Date | string
    createdAt?: Date | string
    product?: ProductCreateNestedOneWithoutSalesInput
    period?: PaymentPeriodCreateNestedOneWithoutSalesInput
  }

  export type SaleUncheckedCreateWithoutVendorInput = {
    id?: string
    productId?: string | null
    productName: string
    quantity: number
    unitPrice?: number
    saleDate?: Date | string
    periodId?: string | null
    createdAt?: Date | string
  }

  export type SaleCreateOrConnectWithoutVendorInput = {
    where: SaleWhereUniqueInput
    create: XOR<SaleCreateWithoutVendorInput, SaleUncheckedCreateWithoutVendorInput>
  }

  export type SaleCreateManyVendorInputEnvelope = {
    data: SaleCreateManyVendorInput | SaleCreateManyVendorInput[]
    skipDuplicates?: boolean
  }

  export type PaymentPeriodCreateWithoutVendorInput = {
    id?: string
    periodType: string
    startDate: Date | string
    endDate: Date | string
    totalSales?: number
    totalCommission?: number
    status?: string
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sales?: SaleCreateNestedManyWithoutPeriodInput
  }

  export type PaymentPeriodUncheckedCreateWithoutVendorInput = {
    id?: string
    periodType: string
    startDate: Date | string
    endDate: Date | string
    totalSales?: number
    totalCommission?: number
    status?: string
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sales?: SaleUncheckedCreateNestedManyWithoutPeriodInput
  }

  export type PaymentPeriodCreateOrConnectWithoutVendorInput = {
    where: PaymentPeriodWhereUniqueInput
    create: XOR<PaymentPeriodCreateWithoutVendorInput, PaymentPeriodUncheckedCreateWithoutVendorInput>
  }

  export type PaymentPeriodCreateManyVendorInputEnvelope = {
    data: PaymentPeriodCreateManyVendorInput | PaymentPeriodCreateManyVendorInput[]
    skipDuplicates?: boolean
  }

  export type QrCodeCreateWithoutVendorInput = {
    id?: string
    uniqueKey: string
    qrUrl: string
    qrImageData?: string | null
    generatedAt?: Date | string
    isActive?: boolean
  }

  export type QrCodeUncheckedCreateWithoutVendorInput = {
    id?: string
    uniqueKey: string
    qrUrl: string
    qrImageData?: string | null
    generatedAt?: Date | string
    isActive?: boolean
  }

  export type QrCodeCreateOrConnectWithoutVendorInput = {
    where: QrCodeWhereUniqueInput
    create: XOR<QrCodeCreateWithoutVendorInput, QrCodeUncheckedCreateWithoutVendorInput>
  }

  export type QrCodeCreateManyVendorInputEnvelope = {
    data: QrCodeCreateManyVendorInput | QrCodeCreateManyVendorInput[]
    skipDuplicates?: boolean
  }

  export type VendorNotificationCreateWithoutVendorInput = {
    id?: string
    isRead?: boolean
    readAt?: Date | string | null
    notification: NotificationCreateNestedOneWithoutVendorNotificationsInput
  }

  export type VendorNotificationUncheckedCreateWithoutVendorInput = {
    id?: string
    notificationId: string
    isRead?: boolean
    readAt?: Date | string | null
  }

  export type VendorNotificationCreateOrConnectWithoutVendorInput = {
    where: VendorNotificationWhereUniqueInput
    create: XOR<VendorNotificationCreateWithoutVendorInput, VendorNotificationUncheckedCreateWithoutVendorInput>
  }

  export type VendorNotificationCreateManyVendorInputEnvelope = {
    data: VendorNotificationCreateManyVendorInput | VendorNotificationCreateManyVendorInput[]
    skipDuplicates?: boolean
  }

  export type PharmacyUpsertWithoutVendorsInput = {
    update: XOR<PharmacyUpdateWithoutVendorsInput, PharmacyUncheckedUpdateWithoutVendorsInput>
    create: XOR<PharmacyCreateWithoutVendorsInput, PharmacyUncheckedCreateWithoutVendorsInput>
    where?: PharmacyWhereInput
  }

  export type PharmacyUpdateToOneWithWhereWithoutVendorsInput = {
    where?: PharmacyWhereInput
    data: XOR<PharmacyUpdateWithoutVendorsInput, PharmacyUncheckedUpdateWithoutVendorsInput>
  }

  export type PharmacyUpdateWithoutVendorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PharmacyUncheckedUpdateWithoutVendorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleUpsertWithWhereUniqueWithoutVendorInput = {
    where: SaleWhereUniqueInput
    update: XOR<SaleUpdateWithoutVendorInput, SaleUncheckedUpdateWithoutVendorInput>
    create: XOR<SaleCreateWithoutVendorInput, SaleUncheckedCreateWithoutVendorInput>
  }

  export type SaleUpdateWithWhereUniqueWithoutVendorInput = {
    where: SaleWhereUniqueInput
    data: XOR<SaleUpdateWithoutVendorInput, SaleUncheckedUpdateWithoutVendorInput>
  }

  export type SaleUpdateManyWithWhereWithoutVendorInput = {
    where: SaleScalarWhereInput
    data: XOR<SaleUpdateManyMutationInput, SaleUncheckedUpdateManyWithoutVendorInput>
  }

  export type SaleScalarWhereInput = {
    AND?: SaleScalarWhereInput | SaleScalarWhereInput[]
    OR?: SaleScalarWhereInput[]
    NOT?: SaleScalarWhereInput | SaleScalarWhereInput[]
    id?: StringFilter<"Sale"> | string
    vendorId?: StringFilter<"Sale"> | string
    productId?: StringNullableFilter<"Sale"> | string | null
    productName?: StringFilter<"Sale"> | string
    quantity?: IntFilter<"Sale"> | number
    unitPrice?: FloatFilter<"Sale"> | number
    saleDate?: DateTimeFilter<"Sale"> | Date | string
    periodId?: StringNullableFilter<"Sale"> | string | null
    createdAt?: DateTimeFilter<"Sale"> | Date | string
  }

  export type PaymentPeriodUpsertWithWhereUniqueWithoutVendorInput = {
    where: PaymentPeriodWhereUniqueInput
    update: XOR<PaymentPeriodUpdateWithoutVendorInput, PaymentPeriodUncheckedUpdateWithoutVendorInput>
    create: XOR<PaymentPeriodCreateWithoutVendorInput, PaymentPeriodUncheckedCreateWithoutVendorInput>
  }

  export type PaymentPeriodUpdateWithWhereUniqueWithoutVendorInput = {
    where: PaymentPeriodWhereUniqueInput
    data: XOR<PaymentPeriodUpdateWithoutVendorInput, PaymentPeriodUncheckedUpdateWithoutVendorInput>
  }

  export type PaymentPeriodUpdateManyWithWhereWithoutVendorInput = {
    where: PaymentPeriodScalarWhereInput
    data: XOR<PaymentPeriodUpdateManyMutationInput, PaymentPeriodUncheckedUpdateManyWithoutVendorInput>
  }

  export type PaymentPeriodScalarWhereInput = {
    AND?: PaymentPeriodScalarWhereInput | PaymentPeriodScalarWhereInput[]
    OR?: PaymentPeriodScalarWhereInput[]
    NOT?: PaymentPeriodScalarWhereInput | PaymentPeriodScalarWhereInput[]
    id?: StringFilter<"PaymentPeriod"> | string
    vendorId?: StringFilter<"PaymentPeriod"> | string
    periodType?: StringFilter<"PaymentPeriod"> | string
    startDate?: DateTimeFilter<"PaymentPeriod"> | Date | string
    endDate?: DateTimeFilter<"PaymentPeriod"> | Date | string
    totalSales?: IntFilter<"PaymentPeriod"> | number
    totalCommission?: FloatFilter<"PaymentPeriod"> | number
    status?: StringFilter<"PaymentPeriod"> | string
    paidAt?: DateTimeNullableFilter<"PaymentPeriod"> | Date | string | null
    createdAt?: DateTimeFilter<"PaymentPeriod"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentPeriod"> | Date | string
  }

  export type QrCodeUpsertWithWhereUniqueWithoutVendorInput = {
    where: QrCodeWhereUniqueInput
    update: XOR<QrCodeUpdateWithoutVendorInput, QrCodeUncheckedUpdateWithoutVendorInput>
    create: XOR<QrCodeCreateWithoutVendorInput, QrCodeUncheckedCreateWithoutVendorInput>
  }

  export type QrCodeUpdateWithWhereUniqueWithoutVendorInput = {
    where: QrCodeWhereUniqueInput
    data: XOR<QrCodeUpdateWithoutVendorInput, QrCodeUncheckedUpdateWithoutVendorInput>
  }

  export type QrCodeUpdateManyWithWhereWithoutVendorInput = {
    where: QrCodeScalarWhereInput
    data: XOR<QrCodeUpdateManyMutationInput, QrCodeUncheckedUpdateManyWithoutVendorInput>
  }

  export type QrCodeScalarWhereInput = {
    AND?: QrCodeScalarWhereInput | QrCodeScalarWhereInput[]
    OR?: QrCodeScalarWhereInput[]
    NOT?: QrCodeScalarWhereInput | QrCodeScalarWhereInput[]
    id?: StringFilter<"QrCode"> | string
    vendorId?: StringFilter<"QrCode"> | string
    uniqueKey?: StringFilter<"QrCode"> | string
    qrUrl?: StringFilter<"QrCode"> | string
    qrImageData?: StringNullableFilter<"QrCode"> | string | null
    generatedAt?: DateTimeFilter<"QrCode"> | Date | string
    isActive?: BoolFilter<"QrCode"> | boolean
  }

  export type VendorNotificationUpsertWithWhereUniqueWithoutVendorInput = {
    where: VendorNotificationWhereUniqueInput
    update: XOR<VendorNotificationUpdateWithoutVendorInput, VendorNotificationUncheckedUpdateWithoutVendorInput>
    create: XOR<VendorNotificationCreateWithoutVendorInput, VendorNotificationUncheckedCreateWithoutVendorInput>
  }

  export type VendorNotificationUpdateWithWhereUniqueWithoutVendorInput = {
    where: VendorNotificationWhereUniqueInput
    data: XOR<VendorNotificationUpdateWithoutVendorInput, VendorNotificationUncheckedUpdateWithoutVendorInput>
  }

  export type VendorNotificationUpdateManyWithWhereWithoutVendorInput = {
    where: VendorNotificationScalarWhereInput
    data: XOR<VendorNotificationUpdateManyMutationInput, VendorNotificationUncheckedUpdateManyWithoutVendorInput>
  }

  export type VendorNotificationScalarWhereInput = {
    AND?: VendorNotificationScalarWhereInput | VendorNotificationScalarWhereInput[]
    OR?: VendorNotificationScalarWhereInput[]
    NOT?: VendorNotificationScalarWhereInput | VendorNotificationScalarWhereInput[]
    id?: StringFilter<"VendorNotification"> | string
    notificationId?: StringFilter<"VendorNotification"> | string
    vendorId?: StringFilter<"VendorNotification"> | string
    isRead?: BoolFilter<"VendorNotification"> | boolean
    readAt?: DateTimeNullableFilter<"VendorNotification"> | Date | string | null
  }

  export type DelegueQrCodeCreateWithoutDelegueInput = {
    id?: string
    uniqueKey: string
    qrUrl: string
    qrImageData?: string | null
    generatedAt?: Date | string
    isActive?: boolean
  }

  export type DelegueQrCodeUncheckedCreateWithoutDelegueInput = {
    id?: string
    uniqueKey: string
    qrUrl: string
    qrImageData?: string | null
    generatedAt?: Date | string
    isActive?: boolean
  }

  export type DelegueQrCodeCreateOrConnectWithoutDelegueInput = {
    where: DelegueQrCodeWhereUniqueInput
    create: XOR<DelegueQrCodeCreateWithoutDelegueInput, DelegueQrCodeUncheckedCreateWithoutDelegueInput>
  }

  export type DelegueQrCodeCreateManyDelegueInputEnvelope = {
    data: DelegueQrCodeCreateManyDelegueInput | DelegueQrCodeCreateManyDelegueInput[]
    skipDuplicates?: boolean
  }

  export type DelegueNotificationCreateWithoutDelegueInput = {
    id?: string
    isRead?: boolean
    readAt?: Date | string | null
    notification: NotificationCreateNestedOneWithoutDelegueNotificationsInput
  }

  export type DelegueNotificationUncheckedCreateWithoutDelegueInput = {
    id?: string
    notificationId: string
    isRead?: boolean
    readAt?: Date | string | null
  }

  export type DelegueNotificationCreateOrConnectWithoutDelegueInput = {
    where: DelegueNotificationWhereUniqueInput
    create: XOR<DelegueNotificationCreateWithoutDelegueInput, DelegueNotificationUncheckedCreateWithoutDelegueInput>
  }

  export type DelegueNotificationCreateManyDelegueInputEnvelope = {
    data: DelegueNotificationCreateManyDelegueInput | DelegueNotificationCreateManyDelegueInput[]
    skipDuplicates?: boolean
  }

  export type DelegueQrCodeUpsertWithWhereUniqueWithoutDelegueInput = {
    where: DelegueQrCodeWhereUniqueInput
    update: XOR<DelegueQrCodeUpdateWithoutDelegueInput, DelegueQrCodeUncheckedUpdateWithoutDelegueInput>
    create: XOR<DelegueQrCodeCreateWithoutDelegueInput, DelegueQrCodeUncheckedCreateWithoutDelegueInput>
  }

  export type DelegueQrCodeUpdateWithWhereUniqueWithoutDelegueInput = {
    where: DelegueQrCodeWhereUniqueInput
    data: XOR<DelegueQrCodeUpdateWithoutDelegueInput, DelegueQrCodeUncheckedUpdateWithoutDelegueInput>
  }

  export type DelegueQrCodeUpdateManyWithWhereWithoutDelegueInput = {
    where: DelegueQrCodeScalarWhereInput
    data: XOR<DelegueQrCodeUpdateManyMutationInput, DelegueQrCodeUncheckedUpdateManyWithoutDelegueInput>
  }

  export type DelegueQrCodeScalarWhereInput = {
    AND?: DelegueQrCodeScalarWhereInput | DelegueQrCodeScalarWhereInput[]
    OR?: DelegueQrCodeScalarWhereInput[]
    NOT?: DelegueQrCodeScalarWhereInput | DelegueQrCodeScalarWhereInput[]
    id?: StringFilter<"DelegueQrCode"> | string
    delegueId?: StringFilter<"DelegueQrCode"> | string
    uniqueKey?: StringFilter<"DelegueQrCode"> | string
    qrUrl?: StringFilter<"DelegueQrCode"> | string
    qrImageData?: StringNullableFilter<"DelegueQrCode"> | string | null
    generatedAt?: DateTimeFilter<"DelegueQrCode"> | Date | string
    isActive?: BoolFilter<"DelegueQrCode"> | boolean
  }

  export type DelegueNotificationUpsertWithWhereUniqueWithoutDelegueInput = {
    where: DelegueNotificationWhereUniqueInput
    update: XOR<DelegueNotificationUpdateWithoutDelegueInput, DelegueNotificationUncheckedUpdateWithoutDelegueInput>
    create: XOR<DelegueNotificationCreateWithoutDelegueInput, DelegueNotificationUncheckedCreateWithoutDelegueInput>
  }

  export type DelegueNotificationUpdateWithWhereUniqueWithoutDelegueInput = {
    where: DelegueNotificationWhereUniqueInput
    data: XOR<DelegueNotificationUpdateWithoutDelegueInput, DelegueNotificationUncheckedUpdateWithoutDelegueInput>
  }

  export type DelegueNotificationUpdateManyWithWhereWithoutDelegueInput = {
    where: DelegueNotificationScalarWhereInput
    data: XOR<DelegueNotificationUpdateManyMutationInput, DelegueNotificationUncheckedUpdateManyWithoutDelegueInput>
  }

  export type DelegueNotificationScalarWhereInput = {
    AND?: DelegueNotificationScalarWhereInput | DelegueNotificationScalarWhereInput[]
    OR?: DelegueNotificationScalarWhereInput[]
    NOT?: DelegueNotificationScalarWhereInput | DelegueNotificationScalarWhereInput[]
    id?: StringFilter<"DelegueNotification"> | string
    notificationId?: StringFilter<"DelegueNotification"> | string
    delegueId?: StringFilter<"DelegueNotification"> | string
    isRead?: BoolFilter<"DelegueNotification"> | boolean
    readAt?: DateTimeNullableFilter<"DelegueNotification"> | Date | string | null
  }

  export type DelegueCreateWithoutQrCodesInput = {
    id?: string
    uniqueCardNumber: string
    name: string
    email?: string | null
    phone?: string | null
    region: JsonNullValueInput | InputJsonValue
    sector?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    notifications?: DelegueNotificationCreateNestedManyWithoutDelegueInput
  }

  export type DelegueUncheckedCreateWithoutQrCodesInput = {
    id?: string
    uniqueCardNumber: string
    name: string
    email?: string | null
    phone?: string | null
    region: JsonNullValueInput | InputJsonValue
    sector?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    notifications?: DelegueNotificationUncheckedCreateNestedManyWithoutDelegueInput
  }

  export type DelegueCreateOrConnectWithoutQrCodesInput = {
    where: DelegueWhereUniqueInput
    create: XOR<DelegueCreateWithoutQrCodesInput, DelegueUncheckedCreateWithoutQrCodesInput>
  }

  export type DelegueUpsertWithoutQrCodesInput = {
    update: XOR<DelegueUpdateWithoutQrCodesInput, DelegueUncheckedUpdateWithoutQrCodesInput>
    create: XOR<DelegueCreateWithoutQrCodesInput, DelegueUncheckedCreateWithoutQrCodesInput>
    where?: DelegueWhereInput
  }

  export type DelegueUpdateToOneWithWhereWithoutQrCodesInput = {
    where?: DelegueWhereInput
    data: XOR<DelegueUpdateWithoutQrCodesInput, DelegueUncheckedUpdateWithoutQrCodesInput>
  }

  export type DelegueUpdateWithoutQrCodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    uniqueCardNumber?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    region?: JsonNullValueInput | InputJsonValue
    sector?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifications?: DelegueNotificationUpdateManyWithoutDelegueNestedInput
  }

  export type DelegueUncheckedUpdateWithoutQrCodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    uniqueCardNumber?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    region?: JsonNullValueInput | InputJsonValue
    sector?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifications?: DelegueNotificationUncheckedUpdateManyWithoutDelegueNestedInput
  }

  export type SaleCreateWithoutProductInput = {
    id?: string
    productName: string
    quantity: number
    unitPrice?: number
    saleDate?: Date | string
    createdAt?: Date | string
    vendor: VendorCreateNestedOneWithoutSalesInput
    period?: PaymentPeriodCreateNestedOneWithoutSalesInput
  }

  export type SaleUncheckedCreateWithoutProductInput = {
    id?: string
    vendorId: string
    productName: string
    quantity: number
    unitPrice?: number
    saleDate?: Date | string
    periodId?: string | null
    createdAt?: Date | string
  }

  export type SaleCreateOrConnectWithoutProductInput = {
    where: SaleWhereUniqueInput
    create: XOR<SaleCreateWithoutProductInput, SaleUncheckedCreateWithoutProductInput>
  }

  export type SaleCreateManyProductInputEnvelope = {
    data: SaleCreateManyProductInput | SaleCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type SaleUpsertWithWhereUniqueWithoutProductInput = {
    where: SaleWhereUniqueInput
    update: XOR<SaleUpdateWithoutProductInput, SaleUncheckedUpdateWithoutProductInput>
    create: XOR<SaleCreateWithoutProductInput, SaleUncheckedCreateWithoutProductInput>
  }

  export type SaleUpdateWithWhereUniqueWithoutProductInput = {
    where: SaleWhereUniqueInput
    data: XOR<SaleUpdateWithoutProductInput, SaleUncheckedUpdateWithoutProductInput>
  }

  export type SaleUpdateManyWithWhereWithoutProductInput = {
    where: SaleScalarWhereInput
    data: XOR<SaleUpdateManyMutationInput, SaleUncheckedUpdateManyWithoutProductInput>
  }

  export type VendorCreateWithoutSalesInput = {
    id?: string
    uniqueCardNumber: string
    name?: string | null
    email?: string | null
    phone?: string | null
    ccp?: string | null
    ccpKey?: string | null
    rip?: string | null
    status?: string
    actionDate?: Date | string
    registrationBonus?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    pharmacy?: PharmacyCreateNestedOneWithoutVendorsInput
    paymentPeriods?: PaymentPeriodCreateNestedManyWithoutVendorInput
    qrCodes?: QrCodeCreateNestedManyWithoutVendorInput
    notifications?: VendorNotificationCreateNestedManyWithoutVendorInput
  }

  export type VendorUncheckedCreateWithoutSalesInput = {
    id?: string
    uniqueCardNumber: string
    name?: string | null
    email?: string | null
    phone?: string | null
    ccp?: string | null
    ccpKey?: string | null
    rip?: string | null
    pharmacyId?: string | null
    status?: string
    actionDate?: Date | string
    registrationBonus?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentPeriods?: PaymentPeriodUncheckedCreateNestedManyWithoutVendorInput
    qrCodes?: QrCodeUncheckedCreateNestedManyWithoutVendorInput
    notifications?: VendorNotificationUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorCreateOrConnectWithoutSalesInput = {
    where: VendorWhereUniqueInput
    create: XOR<VendorCreateWithoutSalesInput, VendorUncheckedCreateWithoutSalesInput>
  }

  export type ProductCreateWithoutSalesInput = {
    id?: string
    name: string
    slug: string
    indication: string
    description?: string | null
    argumentKey?: string | null
    whyItWorks?: string | null
    imageUrl?: string | null
    isActive?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUncheckedCreateWithoutSalesInput = {
    id?: string
    name: string
    slug: string
    indication: string
    description?: string | null
    argumentKey?: string | null
    whyItWorks?: string | null
    imageUrl?: string | null
    isActive?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductCreateOrConnectWithoutSalesInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutSalesInput, ProductUncheckedCreateWithoutSalesInput>
  }

  export type PaymentPeriodCreateWithoutSalesInput = {
    id?: string
    periodType: string
    startDate: Date | string
    endDate: Date | string
    totalSales?: number
    totalCommission?: number
    status?: string
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vendor: VendorCreateNestedOneWithoutPaymentPeriodsInput
  }

  export type PaymentPeriodUncheckedCreateWithoutSalesInput = {
    id?: string
    vendorId: string
    periodType: string
    startDate: Date | string
    endDate: Date | string
    totalSales?: number
    totalCommission?: number
    status?: string
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentPeriodCreateOrConnectWithoutSalesInput = {
    where: PaymentPeriodWhereUniqueInput
    create: XOR<PaymentPeriodCreateWithoutSalesInput, PaymentPeriodUncheckedCreateWithoutSalesInput>
  }

  export type VendorUpsertWithoutSalesInput = {
    update: XOR<VendorUpdateWithoutSalesInput, VendorUncheckedUpdateWithoutSalesInput>
    create: XOR<VendorCreateWithoutSalesInput, VendorUncheckedCreateWithoutSalesInput>
    where?: VendorWhereInput
  }

  export type VendorUpdateToOneWithWhereWithoutSalesInput = {
    where?: VendorWhereInput
    data: XOR<VendorUpdateWithoutSalesInput, VendorUncheckedUpdateWithoutSalesInput>
  }

  export type VendorUpdateWithoutSalesInput = {
    id?: StringFieldUpdateOperationsInput | string
    uniqueCardNumber?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    ccp?: NullableStringFieldUpdateOperationsInput | string | null
    ccpKey?: NullableStringFieldUpdateOperationsInput | string | null
    rip?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    actionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    registrationBonus?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pharmacy?: PharmacyUpdateOneWithoutVendorsNestedInput
    paymentPeriods?: PaymentPeriodUpdateManyWithoutVendorNestedInput
    qrCodes?: QrCodeUpdateManyWithoutVendorNestedInput
    notifications?: VendorNotificationUpdateManyWithoutVendorNestedInput
  }

  export type VendorUncheckedUpdateWithoutSalesInput = {
    id?: StringFieldUpdateOperationsInput | string
    uniqueCardNumber?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    ccp?: NullableStringFieldUpdateOperationsInput | string | null
    ccpKey?: NullableStringFieldUpdateOperationsInput | string | null
    rip?: NullableStringFieldUpdateOperationsInput | string | null
    pharmacyId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    actionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    registrationBonus?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentPeriods?: PaymentPeriodUncheckedUpdateManyWithoutVendorNestedInput
    qrCodes?: QrCodeUncheckedUpdateManyWithoutVendorNestedInput
    notifications?: VendorNotificationUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type ProductUpsertWithoutSalesInput = {
    update: XOR<ProductUpdateWithoutSalesInput, ProductUncheckedUpdateWithoutSalesInput>
    create: XOR<ProductCreateWithoutSalesInput, ProductUncheckedCreateWithoutSalesInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutSalesInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutSalesInput, ProductUncheckedUpdateWithoutSalesInput>
  }

  export type ProductUpdateWithoutSalesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    indication?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    argumentKey?: NullableStringFieldUpdateOperationsInput | string | null
    whyItWorks?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateWithoutSalesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    indication?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    argumentKey?: NullableStringFieldUpdateOperationsInput | string | null
    whyItWorks?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentPeriodUpsertWithoutSalesInput = {
    update: XOR<PaymentPeriodUpdateWithoutSalesInput, PaymentPeriodUncheckedUpdateWithoutSalesInput>
    create: XOR<PaymentPeriodCreateWithoutSalesInput, PaymentPeriodUncheckedCreateWithoutSalesInput>
    where?: PaymentPeriodWhereInput
  }

  export type PaymentPeriodUpdateToOneWithWhereWithoutSalesInput = {
    where?: PaymentPeriodWhereInput
    data: XOR<PaymentPeriodUpdateWithoutSalesInput, PaymentPeriodUncheckedUpdateWithoutSalesInput>
  }

  export type PaymentPeriodUpdateWithoutSalesInput = {
    id?: StringFieldUpdateOperationsInput | string
    periodType?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalSales?: IntFieldUpdateOperationsInput | number
    totalCommission?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendor?: VendorUpdateOneRequiredWithoutPaymentPeriodsNestedInput
  }

  export type PaymentPeriodUncheckedUpdateWithoutSalesInput = {
    id?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    periodType?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalSales?: IntFieldUpdateOperationsInput | number
    totalCommission?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VendorCreateWithoutPaymentPeriodsInput = {
    id?: string
    uniqueCardNumber: string
    name?: string | null
    email?: string | null
    phone?: string | null
    ccp?: string | null
    ccpKey?: string | null
    rip?: string | null
    status?: string
    actionDate?: Date | string
    registrationBonus?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    pharmacy?: PharmacyCreateNestedOneWithoutVendorsInput
    sales?: SaleCreateNestedManyWithoutVendorInput
    qrCodes?: QrCodeCreateNestedManyWithoutVendorInput
    notifications?: VendorNotificationCreateNestedManyWithoutVendorInput
  }

  export type VendorUncheckedCreateWithoutPaymentPeriodsInput = {
    id?: string
    uniqueCardNumber: string
    name?: string | null
    email?: string | null
    phone?: string | null
    ccp?: string | null
    ccpKey?: string | null
    rip?: string | null
    pharmacyId?: string | null
    status?: string
    actionDate?: Date | string
    registrationBonus?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sales?: SaleUncheckedCreateNestedManyWithoutVendorInput
    qrCodes?: QrCodeUncheckedCreateNestedManyWithoutVendorInput
    notifications?: VendorNotificationUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorCreateOrConnectWithoutPaymentPeriodsInput = {
    where: VendorWhereUniqueInput
    create: XOR<VendorCreateWithoutPaymentPeriodsInput, VendorUncheckedCreateWithoutPaymentPeriodsInput>
  }

  export type SaleCreateWithoutPeriodInput = {
    id?: string
    productName: string
    quantity: number
    unitPrice?: number
    saleDate?: Date | string
    createdAt?: Date | string
    vendor: VendorCreateNestedOneWithoutSalesInput
    product?: ProductCreateNestedOneWithoutSalesInput
  }

  export type SaleUncheckedCreateWithoutPeriodInput = {
    id?: string
    vendorId: string
    productId?: string | null
    productName: string
    quantity: number
    unitPrice?: number
    saleDate?: Date | string
    createdAt?: Date | string
  }

  export type SaleCreateOrConnectWithoutPeriodInput = {
    where: SaleWhereUniqueInput
    create: XOR<SaleCreateWithoutPeriodInput, SaleUncheckedCreateWithoutPeriodInput>
  }

  export type SaleCreateManyPeriodInputEnvelope = {
    data: SaleCreateManyPeriodInput | SaleCreateManyPeriodInput[]
    skipDuplicates?: boolean
  }

  export type VendorUpsertWithoutPaymentPeriodsInput = {
    update: XOR<VendorUpdateWithoutPaymentPeriodsInput, VendorUncheckedUpdateWithoutPaymentPeriodsInput>
    create: XOR<VendorCreateWithoutPaymentPeriodsInput, VendorUncheckedCreateWithoutPaymentPeriodsInput>
    where?: VendorWhereInput
  }

  export type VendorUpdateToOneWithWhereWithoutPaymentPeriodsInput = {
    where?: VendorWhereInput
    data: XOR<VendorUpdateWithoutPaymentPeriodsInput, VendorUncheckedUpdateWithoutPaymentPeriodsInput>
  }

  export type VendorUpdateWithoutPaymentPeriodsInput = {
    id?: StringFieldUpdateOperationsInput | string
    uniqueCardNumber?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    ccp?: NullableStringFieldUpdateOperationsInput | string | null
    ccpKey?: NullableStringFieldUpdateOperationsInput | string | null
    rip?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    actionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    registrationBonus?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pharmacy?: PharmacyUpdateOneWithoutVendorsNestedInput
    sales?: SaleUpdateManyWithoutVendorNestedInput
    qrCodes?: QrCodeUpdateManyWithoutVendorNestedInput
    notifications?: VendorNotificationUpdateManyWithoutVendorNestedInput
  }

  export type VendorUncheckedUpdateWithoutPaymentPeriodsInput = {
    id?: StringFieldUpdateOperationsInput | string
    uniqueCardNumber?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    ccp?: NullableStringFieldUpdateOperationsInput | string | null
    ccpKey?: NullableStringFieldUpdateOperationsInput | string | null
    rip?: NullableStringFieldUpdateOperationsInput | string | null
    pharmacyId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    actionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    registrationBonus?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sales?: SaleUncheckedUpdateManyWithoutVendorNestedInput
    qrCodes?: QrCodeUncheckedUpdateManyWithoutVendorNestedInput
    notifications?: VendorNotificationUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type SaleUpsertWithWhereUniqueWithoutPeriodInput = {
    where: SaleWhereUniqueInput
    update: XOR<SaleUpdateWithoutPeriodInput, SaleUncheckedUpdateWithoutPeriodInput>
    create: XOR<SaleCreateWithoutPeriodInput, SaleUncheckedCreateWithoutPeriodInput>
  }

  export type SaleUpdateWithWhereUniqueWithoutPeriodInput = {
    where: SaleWhereUniqueInput
    data: XOR<SaleUpdateWithoutPeriodInput, SaleUncheckedUpdateWithoutPeriodInput>
  }

  export type SaleUpdateManyWithWhereWithoutPeriodInput = {
    where: SaleScalarWhereInput
    data: XOR<SaleUpdateManyMutationInput, SaleUncheckedUpdateManyWithoutPeriodInput>
  }

  export type VendorCreateWithoutQrCodesInput = {
    id?: string
    uniqueCardNumber: string
    name?: string | null
    email?: string | null
    phone?: string | null
    ccp?: string | null
    ccpKey?: string | null
    rip?: string | null
    status?: string
    actionDate?: Date | string
    registrationBonus?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    pharmacy?: PharmacyCreateNestedOneWithoutVendorsInput
    sales?: SaleCreateNestedManyWithoutVendorInput
    paymentPeriods?: PaymentPeriodCreateNestedManyWithoutVendorInput
    notifications?: VendorNotificationCreateNestedManyWithoutVendorInput
  }

  export type VendorUncheckedCreateWithoutQrCodesInput = {
    id?: string
    uniqueCardNumber: string
    name?: string | null
    email?: string | null
    phone?: string | null
    ccp?: string | null
    ccpKey?: string | null
    rip?: string | null
    pharmacyId?: string | null
    status?: string
    actionDate?: Date | string
    registrationBonus?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sales?: SaleUncheckedCreateNestedManyWithoutVendorInput
    paymentPeriods?: PaymentPeriodUncheckedCreateNestedManyWithoutVendorInput
    notifications?: VendorNotificationUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorCreateOrConnectWithoutQrCodesInput = {
    where: VendorWhereUniqueInput
    create: XOR<VendorCreateWithoutQrCodesInput, VendorUncheckedCreateWithoutQrCodesInput>
  }

  export type VendorUpsertWithoutQrCodesInput = {
    update: XOR<VendorUpdateWithoutQrCodesInput, VendorUncheckedUpdateWithoutQrCodesInput>
    create: XOR<VendorCreateWithoutQrCodesInput, VendorUncheckedCreateWithoutQrCodesInput>
    where?: VendorWhereInput
  }

  export type VendorUpdateToOneWithWhereWithoutQrCodesInput = {
    where?: VendorWhereInput
    data: XOR<VendorUpdateWithoutQrCodesInput, VendorUncheckedUpdateWithoutQrCodesInput>
  }

  export type VendorUpdateWithoutQrCodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    uniqueCardNumber?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    ccp?: NullableStringFieldUpdateOperationsInput | string | null
    ccpKey?: NullableStringFieldUpdateOperationsInput | string | null
    rip?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    actionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    registrationBonus?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pharmacy?: PharmacyUpdateOneWithoutVendorsNestedInput
    sales?: SaleUpdateManyWithoutVendorNestedInput
    paymentPeriods?: PaymentPeriodUpdateManyWithoutVendorNestedInput
    notifications?: VendorNotificationUpdateManyWithoutVendorNestedInput
  }

  export type VendorUncheckedUpdateWithoutQrCodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    uniqueCardNumber?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    ccp?: NullableStringFieldUpdateOperationsInput | string | null
    ccpKey?: NullableStringFieldUpdateOperationsInput | string | null
    rip?: NullableStringFieldUpdateOperationsInput | string | null
    pharmacyId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    actionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    registrationBonus?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sales?: SaleUncheckedUpdateManyWithoutVendorNestedInput
    paymentPeriods?: PaymentPeriodUncheckedUpdateManyWithoutVendorNestedInput
    notifications?: VendorNotificationUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type VendorNotificationCreateWithoutNotificationInput = {
    id?: string
    isRead?: boolean
    readAt?: Date | string | null
    vendor: VendorCreateNestedOneWithoutNotificationsInput
  }

  export type VendorNotificationUncheckedCreateWithoutNotificationInput = {
    id?: string
    vendorId: string
    isRead?: boolean
    readAt?: Date | string | null
  }

  export type VendorNotificationCreateOrConnectWithoutNotificationInput = {
    where: VendorNotificationWhereUniqueInput
    create: XOR<VendorNotificationCreateWithoutNotificationInput, VendorNotificationUncheckedCreateWithoutNotificationInput>
  }

  export type VendorNotificationCreateManyNotificationInputEnvelope = {
    data: VendorNotificationCreateManyNotificationInput | VendorNotificationCreateManyNotificationInput[]
    skipDuplicates?: boolean
  }

  export type DelegueNotificationCreateWithoutNotificationInput = {
    id?: string
    isRead?: boolean
    readAt?: Date | string | null
    delegue: DelegueCreateNestedOneWithoutNotificationsInput
  }

  export type DelegueNotificationUncheckedCreateWithoutNotificationInput = {
    id?: string
    delegueId: string
    isRead?: boolean
    readAt?: Date | string | null
  }

  export type DelegueNotificationCreateOrConnectWithoutNotificationInput = {
    where: DelegueNotificationWhereUniqueInput
    create: XOR<DelegueNotificationCreateWithoutNotificationInput, DelegueNotificationUncheckedCreateWithoutNotificationInput>
  }

  export type DelegueNotificationCreateManyNotificationInputEnvelope = {
    data: DelegueNotificationCreateManyNotificationInput | DelegueNotificationCreateManyNotificationInput[]
    skipDuplicates?: boolean
  }

  export type VendorNotificationUpsertWithWhereUniqueWithoutNotificationInput = {
    where: VendorNotificationWhereUniqueInput
    update: XOR<VendorNotificationUpdateWithoutNotificationInput, VendorNotificationUncheckedUpdateWithoutNotificationInput>
    create: XOR<VendorNotificationCreateWithoutNotificationInput, VendorNotificationUncheckedCreateWithoutNotificationInput>
  }

  export type VendorNotificationUpdateWithWhereUniqueWithoutNotificationInput = {
    where: VendorNotificationWhereUniqueInput
    data: XOR<VendorNotificationUpdateWithoutNotificationInput, VendorNotificationUncheckedUpdateWithoutNotificationInput>
  }

  export type VendorNotificationUpdateManyWithWhereWithoutNotificationInput = {
    where: VendorNotificationScalarWhereInput
    data: XOR<VendorNotificationUpdateManyMutationInput, VendorNotificationUncheckedUpdateManyWithoutNotificationInput>
  }

  export type DelegueNotificationUpsertWithWhereUniqueWithoutNotificationInput = {
    where: DelegueNotificationWhereUniqueInput
    update: XOR<DelegueNotificationUpdateWithoutNotificationInput, DelegueNotificationUncheckedUpdateWithoutNotificationInput>
    create: XOR<DelegueNotificationCreateWithoutNotificationInput, DelegueNotificationUncheckedCreateWithoutNotificationInput>
  }

  export type DelegueNotificationUpdateWithWhereUniqueWithoutNotificationInput = {
    where: DelegueNotificationWhereUniqueInput
    data: XOR<DelegueNotificationUpdateWithoutNotificationInput, DelegueNotificationUncheckedUpdateWithoutNotificationInput>
  }

  export type DelegueNotificationUpdateManyWithWhereWithoutNotificationInput = {
    where: DelegueNotificationScalarWhereInput
    data: XOR<DelegueNotificationUpdateManyMutationInput, DelegueNotificationUncheckedUpdateManyWithoutNotificationInput>
  }

  export type NotificationCreateWithoutVendorNotificationsInput = {
    id?: string
    title: string
    message: string
    type?: string
    targetType?: string
    createdAt?: Date | string
    delegueNotifications?: DelegueNotificationCreateNestedManyWithoutNotificationInput
  }

  export type NotificationUncheckedCreateWithoutVendorNotificationsInput = {
    id?: string
    title: string
    message: string
    type?: string
    targetType?: string
    createdAt?: Date | string
    delegueNotifications?: DelegueNotificationUncheckedCreateNestedManyWithoutNotificationInput
  }

  export type NotificationCreateOrConnectWithoutVendorNotificationsInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutVendorNotificationsInput, NotificationUncheckedCreateWithoutVendorNotificationsInput>
  }

  export type VendorCreateWithoutNotificationsInput = {
    id?: string
    uniqueCardNumber: string
    name?: string | null
    email?: string | null
    phone?: string | null
    ccp?: string | null
    ccpKey?: string | null
    rip?: string | null
    status?: string
    actionDate?: Date | string
    registrationBonus?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    pharmacy?: PharmacyCreateNestedOneWithoutVendorsInput
    sales?: SaleCreateNestedManyWithoutVendorInput
    paymentPeriods?: PaymentPeriodCreateNestedManyWithoutVendorInput
    qrCodes?: QrCodeCreateNestedManyWithoutVendorInput
  }

  export type VendorUncheckedCreateWithoutNotificationsInput = {
    id?: string
    uniqueCardNumber: string
    name?: string | null
    email?: string | null
    phone?: string | null
    ccp?: string | null
    ccpKey?: string | null
    rip?: string | null
    pharmacyId?: string | null
    status?: string
    actionDate?: Date | string
    registrationBonus?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sales?: SaleUncheckedCreateNestedManyWithoutVendorInput
    paymentPeriods?: PaymentPeriodUncheckedCreateNestedManyWithoutVendorInput
    qrCodes?: QrCodeUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorCreateOrConnectWithoutNotificationsInput = {
    where: VendorWhereUniqueInput
    create: XOR<VendorCreateWithoutNotificationsInput, VendorUncheckedCreateWithoutNotificationsInput>
  }

  export type NotificationUpsertWithoutVendorNotificationsInput = {
    update: XOR<NotificationUpdateWithoutVendorNotificationsInput, NotificationUncheckedUpdateWithoutVendorNotificationsInput>
    create: XOR<NotificationCreateWithoutVendorNotificationsInput, NotificationUncheckedCreateWithoutVendorNotificationsInput>
    where?: NotificationWhereInput
  }

  export type NotificationUpdateToOneWithWhereWithoutVendorNotificationsInput = {
    where?: NotificationWhereInput
    data: XOR<NotificationUpdateWithoutVendorNotificationsInput, NotificationUncheckedUpdateWithoutVendorNotificationsInput>
  }

  export type NotificationUpdateWithoutVendorNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    targetType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delegueNotifications?: DelegueNotificationUpdateManyWithoutNotificationNestedInput
  }

  export type NotificationUncheckedUpdateWithoutVendorNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    targetType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delegueNotifications?: DelegueNotificationUncheckedUpdateManyWithoutNotificationNestedInput
  }

  export type VendorUpsertWithoutNotificationsInput = {
    update: XOR<VendorUpdateWithoutNotificationsInput, VendorUncheckedUpdateWithoutNotificationsInput>
    create: XOR<VendorCreateWithoutNotificationsInput, VendorUncheckedCreateWithoutNotificationsInput>
    where?: VendorWhereInput
  }

  export type VendorUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: VendorWhereInput
    data: XOR<VendorUpdateWithoutNotificationsInput, VendorUncheckedUpdateWithoutNotificationsInput>
  }

  export type VendorUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    uniqueCardNumber?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    ccp?: NullableStringFieldUpdateOperationsInput | string | null
    ccpKey?: NullableStringFieldUpdateOperationsInput | string | null
    rip?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    actionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    registrationBonus?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pharmacy?: PharmacyUpdateOneWithoutVendorsNestedInput
    sales?: SaleUpdateManyWithoutVendorNestedInput
    paymentPeriods?: PaymentPeriodUpdateManyWithoutVendorNestedInput
    qrCodes?: QrCodeUpdateManyWithoutVendorNestedInput
  }

  export type VendorUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    uniqueCardNumber?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    ccp?: NullableStringFieldUpdateOperationsInput | string | null
    ccpKey?: NullableStringFieldUpdateOperationsInput | string | null
    rip?: NullableStringFieldUpdateOperationsInput | string | null
    pharmacyId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    actionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    registrationBonus?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sales?: SaleUncheckedUpdateManyWithoutVendorNestedInput
    paymentPeriods?: PaymentPeriodUncheckedUpdateManyWithoutVendorNestedInput
    qrCodes?: QrCodeUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type NotificationCreateWithoutDelegueNotificationsInput = {
    id?: string
    title: string
    message: string
    type?: string
    targetType?: string
    createdAt?: Date | string
    vendorNotifications?: VendorNotificationCreateNestedManyWithoutNotificationInput
  }

  export type NotificationUncheckedCreateWithoutDelegueNotificationsInput = {
    id?: string
    title: string
    message: string
    type?: string
    targetType?: string
    createdAt?: Date | string
    vendorNotifications?: VendorNotificationUncheckedCreateNestedManyWithoutNotificationInput
  }

  export type NotificationCreateOrConnectWithoutDelegueNotificationsInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutDelegueNotificationsInput, NotificationUncheckedCreateWithoutDelegueNotificationsInput>
  }

  export type DelegueCreateWithoutNotificationsInput = {
    id?: string
    uniqueCardNumber: string
    name: string
    email?: string | null
    phone?: string | null
    region: JsonNullValueInput | InputJsonValue
    sector?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    qrCodes?: DelegueQrCodeCreateNestedManyWithoutDelegueInput
  }

  export type DelegueUncheckedCreateWithoutNotificationsInput = {
    id?: string
    uniqueCardNumber: string
    name: string
    email?: string | null
    phone?: string | null
    region: JsonNullValueInput | InputJsonValue
    sector?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    qrCodes?: DelegueQrCodeUncheckedCreateNestedManyWithoutDelegueInput
  }

  export type DelegueCreateOrConnectWithoutNotificationsInput = {
    where: DelegueWhereUniqueInput
    create: XOR<DelegueCreateWithoutNotificationsInput, DelegueUncheckedCreateWithoutNotificationsInput>
  }

  export type NotificationUpsertWithoutDelegueNotificationsInput = {
    update: XOR<NotificationUpdateWithoutDelegueNotificationsInput, NotificationUncheckedUpdateWithoutDelegueNotificationsInput>
    create: XOR<NotificationCreateWithoutDelegueNotificationsInput, NotificationUncheckedCreateWithoutDelegueNotificationsInput>
    where?: NotificationWhereInput
  }

  export type NotificationUpdateToOneWithWhereWithoutDelegueNotificationsInput = {
    where?: NotificationWhereInput
    data: XOR<NotificationUpdateWithoutDelegueNotificationsInput, NotificationUncheckedUpdateWithoutDelegueNotificationsInput>
  }

  export type NotificationUpdateWithoutDelegueNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    targetType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendorNotifications?: VendorNotificationUpdateManyWithoutNotificationNestedInput
  }

  export type NotificationUncheckedUpdateWithoutDelegueNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    targetType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendorNotifications?: VendorNotificationUncheckedUpdateManyWithoutNotificationNestedInput
  }

  export type DelegueUpsertWithoutNotificationsInput = {
    update: XOR<DelegueUpdateWithoutNotificationsInput, DelegueUncheckedUpdateWithoutNotificationsInput>
    create: XOR<DelegueCreateWithoutNotificationsInput, DelegueUncheckedCreateWithoutNotificationsInput>
    where?: DelegueWhereInput
  }

  export type DelegueUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: DelegueWhereInput
    data: XOR<DelegueUpdateWithoutNotificationsInput, DelegueUncheckedUpdateWithoutNotificationsInput>
  }

  export type DelegueUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    uniqueCardNumber?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    region?: JsonNullValueInput | InputJsonValue
    sector?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    qrCodes?: DelegueQrCodeUpdateManyWithoutDelegueNestedInput
  }

  export type DelegueUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    uniqueCardNumber?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    region?: JsonNullValueInput | InputJsonValue
    sector?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    qrCodes?: DelegueQrCodeUncheckedUpdateManyWithoutDelegueNestedInput
  }

  export type VendorCreateManyPharmacyInput = {
    id?: string
    uniqueCardNumber: string
    name?: string | null
    email?: string | null
    phone?: string | null
    ccp?: string | null
    ccpKey?: string | null
    rip?: string | null
    status?: string
    actionDate?: Date | string
    registrationBonus?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VendorUpdateWithoutPharmacyInput = {
    id?: StringFieldUpdateOperationsInput | string
    uniqueCardNumber?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    ccp?: NullableStringFieldUpdateOperationsInput | string | null
    ccpKey?: NullableStringFieldUpdateOperationsInput | string | null
    rip?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    actionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    registrationBonus?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sales?: SaleUpdateManyWithoutVendorNestedInput
    paymentPeriods?: PaymentPeriodUpdateManyWithoutVendorNestedInput
    qrCodes?: QrCodeUpdateManyWithoutVendorNestedInput
    notifications?: VendorNotificationUpdateManyWithoutVendorNestedInput
  }

  export type VendorUncheckedUpdateWithoutPharmacyInput = {
    id?: StringFieldUpdateOperationsInput | string
    uniqueCardNumber?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    ccp?: NullableStringFieldUpdateOperationsInput | string | null
    ccpKey?: NullableStringFieldUpdateOperationsInput | string | null
    rip?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    actionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    registrationBonus?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sales?: SaleUncheckedUpdateManyWithoutVendorNestedInput
    paymentPeriods?: PaymentPeriodUncheckedUpdateManyWithoutVendorNestedInput
    qrCodes?: QrCodeUncheckedUpdateManyWithoutVendorNestedInput
    notifications?: VendorNotificationUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type VendorUncheckedUpdateManyWithoutPharmacyInput = {
    id?: StringFieldUpdateOperationsInput | string
    uniqueCardNumber?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    ccp?: NullableStringFieldUpdateOperationsInput | string | null
    ccpKey?: NullableStringFieldUpdateOperationsInput | string | null
    rip?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    actionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    registrationBonus?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleCreateManyVendorInput = {
    id?: string
    productId?: string | null
    productName: string
    quantity: number
    unitPrice?: number
    saleDate?: Date | string
    periodId?: string | null
    createdAt?: Date | string
  }

  export type PaymentPeriodCreateManyVendorInput = {
    id?: string
    periodType: string
    startDate: Date | string
    endDate: Date | string
    totalSales?: number
    totalCommission?: number
    status?: string
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QrCodeCreateManyVendorInput = {
    id?: string
    uniqueKey: string
    qrUrl: string
    qrImageData?: string | null
    generatedAt?: Date | string
    isActive?: boolean
  }

  export type VendorNotificationCreateManyVendorInput = {
    id?: string
    notificationId: string
    isRead?: boolean
    readAt?: Date | string | null
  }

  export type SaleUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    saleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneWithoutSalesNestedInput
    period?: PaymentPeriodUpdateOneWithoutSalesNestedInput
  }

  export type SaleUncheckedUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    saleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    periodId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleUncheckedUpdateManyWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    saleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    periodId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentPeriodUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    periodType?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalSales?: IntFieldUpdateOperationsInput | number
    totalCommission?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sales?: SaleUpdateManyWithoutPeriodNestedInput
  }

  export type PaymentPeriodUncheckedUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    periodType?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalSales?: IntFieldUpdateOperationsInput | number
    totalCommission?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sales?: SaleUncheckedUpdateManyWithoutPeriodNestedInput
  }

  export type PaymentPeriodUncheckedUpdateManyWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    periodType?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalSales?: IntFieldUpdateOperationsInput | number
    totalCommission?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QrCodeUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    uniqueKey?: StringFieldUpdateOperationsInput | string
    qrUrl?: StringFieldUpdateOperationsInput | string
    qrImageData?: NullableStringFieldUpdateOperationsInput | string | null
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type QrCodeUncheckedUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    uniqueKey?: StringFieldUpdateOperationsInput | string
    qrUrl?: StringFieldUpdateOperationsInput | string
    qrImageData?: NullableStringFieldUpdateOperationsInput | string | null
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type QrCodeUncheckedUpdateManyWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    uniqueKey?: StringFieldUpdateOperationsInput | string
    qrUrl?: StringFieldUpdateOperationsInput | string
    qrImageData?: NullableStringFieldUpdateOperationsInput | string | null
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VendorNotificationUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notification?: NotificationUpdateOneRequiredWithoutVendorNotificationsNestedInput
  }

  export type VendorNotificationUncheckedUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    notificationId?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VendorNotificationUncheckedUpdateManyWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    notificationId?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DelegueQrCodeCreateManyDelegueInput = {
    id?: string
    uniqueKey: string
    qrUrl: string
    qrImageData?: string | null
    generatedAt?: Date | string
    isActive?: boolean
  }

  export type DelegueNotificationCreateManyDelegueInput = {
    id?: string
    notificationId: string
    isRead?: boolean
    readAt?: Date | string | null
  }

  export type DelegueQrCodeUpdateWithoutDelegueInput = {
    id?: StringFieldUpdateOperationsInput | string
    uniqueKey?: StringFieldUpdateOperationsInput | string
    qrUrl?: StringFieldUpdateOperationsInput | string
    qrImageData?: NullableStringFieldUpdateOperationsInput | string | null
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DelegueQrCodeUncheckedUpdateWithoutDelegueInput = {
    id?: StringFieldUpdateOperationsInput | string
    uniqueKey?: StringFieldUpdateOperationsInput | string
    qrUrl?: StringFieldUpdateOperationsInput | string
    qrImageData?: NullableStringFieldUpdateOperationsInput | string | null
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DelegueQrCodeUncheckedUpdateManyWithoutDelegueInput = {
    id?: StringFieldUpdateOperationsInput | string
    uniqueKey?: StringFieldUpdateOperationsInput | string
    qrUrl?: StringFieldUpdateOperationsInput | string
    qrImageData?: NullableStringFieldUpdateOperationsInput | string | null
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DelegueNotificationUpdateWithoutDelegueInput = {
    id?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notification?: NotificationUpdateOneRequiredWithoutDelegueNotificationsNestedInput
  }

  export type DelegueNotificationUncheckedUpdateWithoutDelegueInput = {
    id?: StringFieldUpdateOperationsInput | string
    notificationId?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DelegueNotificationUncheckedUpdateManyWithoutDelegueInput = {
    id?: StringFieldUpdateOperationsInput | string
    notificationId?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SaleCreateManyProductInput = {
    id?: string
    vendorId: string
    productName: string
    quantity: number
    unitPrice?: number
    saleDate?: Date | string
    periodId?: string | null
    createdAt?: Date | string
  }

  export type SaleUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    saleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendor?: VendorUpdateOneRequiredWithoutSalesNestedInput
    period?: PaymentPeriodUpdateOneWithoutSalesNestedInput
  }

  export type SaleUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    saleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    periodId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    saleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    periodId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleCreateManyPeriodInput = {
    id?: string
    vendorId: string
    productId?: string | null
    productName: string
    quantity: number
    unitPrice?: number
    saleDate?: Date | string
    createdAt?: Date | string
  }

  export type SaleUpdateWithoutPeriodInput = {
    id?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    saleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vendor?: VendorUpdateOneRequiredWithoutSalesNestedInput
    product?: ProductUpdateOneWithoutSalesNestedInput
  }

  export type SaleUncheckedUpdateWithoutPeriodInput = {
    id?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    saleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleUncheckedUpdateManyWithoutPeriodInput = {
    id?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    saleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VendorNotificationCreateManyNotificationInput = {
    id?: string
    vendorId: string
    isRead?: boolean
    readAt?: Date | string | null
  }

  export type DelegueNotificationCreateManyNotificationInput = {
    id?: string
    delegueId: string
    isRead?: boolean
    readAt?: Date | string | null
  }

  export type VendorNotificationUpdateWithoutNotificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vendor?: VendorUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type VendorNotificationUncheckedUpdateWithoutNotificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VendorNotificationUncheckedUpdateManyWithoutNotificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    vendorId?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DelegueNotificationUpdateWithoutNotificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    delegue?: DelegueUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type DelegueNotificationUncheckedUpdateWithoutNotificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    delegueId?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DelegueNotificationUncheckedUpdateManyWithoutNotificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    delegueId?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}