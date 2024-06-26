// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import type { HttpStatusCodes } from "@gtsc/web";

/**
 * The rest request ended in accepted response.
 */
export interface IAcceptedResponse {
	/**
	 * Response status code.
	 */
	statusCode: HttpStatusCodes;

	/**
	 * Additional response headers.
	 */
	headers: {
		/**
		 * The location where the resource was accepted.
		 */
		location: string;
	};
}
