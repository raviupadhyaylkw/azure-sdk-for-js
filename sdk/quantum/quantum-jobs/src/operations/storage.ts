/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { QuantumJobClient } from "../quantumJobClient";
import { BlobDetails, StorageSasUriResponse } from "../models";

/** Class representing a Storage. */
export class Storage {
  private readonly client: QuantumJobClient;

  /**
   * Initialize a new instance of the class Storage class.
   * @param client Reference to the service client
   */
  constructor(client: QuantumJobClient) {
    this.client = client;
  }

  /**
   * Gets a URL with SAS token for a container/blob in the storage account associated with the workspace.
   * The SAS URL can be used to upload job input and/or download job output.
   * @param blobDetails The details (name and container) of the blob to store or download data.
   * @param options The options parameters.
   */
  sasUri(
    blobDetails: BlobDetails,
    options?: coreHttp.OperationOptions
  ): Promise<StorageSasUriResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      blobDetails,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(operationArguments, sasUriOperationSpec) as Promise<
      StorageSasUriResponse
    >;
  }
}
// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const sasUriOperationSpec: coreHttp.OperationSpec = {
  path:
    "/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Quantum/workspaces/{workspaceName}/storage/sasUri",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.SasUriResponse
    },
    default: {
      bodyMapper: Mappers.RestError
    }
  },
  requestBody: Parameters.blobDetails,
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
