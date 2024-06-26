# Interface: IRestRoute\<T, U\>

Interface which defines a REST route.

## Extends

- [`IBaseRoute`](IBaseRoute.md)

## Type parameters

• **T** = `any`

• **U** = `any`

## Properties

### operationId

> **operationId**: `string`

The id of the operation.

#### Inherited from

[`IBaseRoute`](IBaseRoute.md).[`operationId`](IBaseRoute.md#operationid)

***

### path

> **path**: `string`

The path to use for routing.

#### Inherited from

[`IBaseRoute`](IBaseRoute.md).[`path`](IBaseRoute.md#path)

***

### skipTenantAuth?

> `optional` **skipTenantAuth**: `boolean`

Skips the tenant authentication for this route.

#### Inherited from

[`IBaseRoute`](IBaseRoute.md).[`skipTenantAuth`](IBaseRoute.md#skiptenantauth)

***

### skipSubjectAuth?

> `optional` **skipSubjectAuth**: `boolean`

Skips the subject authentication for this route.

#### Inherited from

[`IBaseRoute`](IBaseRoute.md).[`skipSubjectAuth`](IBaseRoute.md#skipsubjectauth)

***

### summary

> **summary**: `string`

Summary of what task the operation performs.

***

### tag

> **tag**: `string`

Tag for the operation.

***

### method

> **method**: `HttpMethods`

The http method.

***

### handler()

> **handler**: (`requestContext`, `request`) => `Promise`\<`U`\>

The handler module.

#### Parameters

• **requestContext**: [`IHttpRequestContext`](IHttpRequestContext.md)

The request context.

• **request**: `T`

The request object, combined query param, path params and body.

#### Returns

`Promise`\<`U`\>

***

### requestType?

> `optional` **requestType**: `object`

The type of the request object.

#### type

> **type**: `string`

The object type for the request.

#### examples?

> `optional` **examples**: `object`[]

Example objects for the request.

***

### responseType?

> `optional` **responseType**: `object`[]

The type of the response object.

***

### requestContentType?

> `optional` **requestContentType**: `object`[]

The request can have alternative content mime types.

***

### responseContentType?

> `optional` **responseContentType**: `object`[]

The response can have alternative content mime types.

***

### excludeFromSpec?

> `optional` **excludeFromSpec**: `boolean`

Exclude the route from being included in the spec file.
