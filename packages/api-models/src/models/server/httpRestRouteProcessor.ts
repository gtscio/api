// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { IRequestContext } from "@gtsc/services";
import type { IHttpRequest } from "../protocol/IHttpRequest";
import type { IHttpResponse } from "../protocol/IHttpResponse";
import type { IRestRoute } from "../routes/IRestRoute";

/**
 * Process the REST request for the specified route.
 * @param requestContext The context for the request.
 * @param request The request to handle.
 * @param response The response data to send if any.
 * @param route The route being requested, if a matching one was found.
 * @param state The state for the request.
 * @param options Options for the processor.
 */
export type HttpRestRouteProcessor<T = never> = (
	requestContext: IRequestContext,
	request: IHttpRequest,
	response: IHttpResponse,
	route: IRestRoute | undefined,
	state: { [id: string]: unknown },
	options?: T
) => Promise<void>;
