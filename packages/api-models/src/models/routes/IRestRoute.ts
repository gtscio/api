// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IRequestContext } from "@gtsc/services";
import type { HttpMethods } from "@gtsc/web";
import type { IBaseRoute } from "./IBaseRoute";

/**
 * Interface which defines a REST route.
 */
export interface IRestRoute extends IBaseRoute {
	/**
	 * Summary of what task the operation performs.
	 */
	summary: string;

	/**
	 * Tag for the operation.
	 */
	tag: string;

	/**
	 * The http method.
	 */
	method: HttpMethods;

	/**
	 * The handler module.
	 */
	handler: (
		/**
		 * The request context.
		 */
		requestContext: IRequestContext,

		/**
		 * The request object, combined query param, path params and body.
		 */
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		request: any,

		/**
		 * Body as standalone if it's a data request.
		 */
		body?: unknown
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	) => Promise<any>;

	/**
	 * The type of the request object.
	 */
	requestType?: string;

	/**
	 * The type of the response object.
	 */
	responseType?:
		| string
		| {
				statusCode: number;
				type: string;
		  }[];

	/**
	 * The request can have alternative content mime types.
	 */
	requestContentType?: {
		mimeType: string;
		description: string;
	}[];

	/**
	 * The response can have alternative content mime types.
	 */
	responseContentType?: {
		mimeType: string;
		description: string;
	}[];
}
