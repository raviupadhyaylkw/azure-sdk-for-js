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
import { GeneratedClient } from "../generatedClient";
import {
  TableServiceProperties,
  ServiceSetPropertiesOptionalParams,
  ServiceSetPropertiesResponse,
  ServiceGetPropertiesOptionalParams,
  ServiceGetPropertiesResponse,
  ServiceGetStatisticsOptionalParams,
  ServiceGetStatisticsResponse
} from "../models";

/** Class representing a Service. */
/** @hidden */
export class Service {
  private readonly client: GeneratedClient;

  /**
   * Initialize a new instance of the class Service class.
   * @param client Reference to the service client
   */
  constructor(client: GeneratedClient) {
    this.client = client;
  }

  /**
   * Sets properties for an account's Table service endpoint, including properties for Analytics and CORS
   * (Cross-Origin Resource Sharing) rules.
   * @param tableServiceProperties The Table Service properties.
   * @param options The options parameters.
   */
  setProperties(
    tableServiceProperties: TableServiceProperties,
    options?: ServiceSetPropertiesOptionalParams
  ): Promise<ServiceSetPropertiesResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      tableServiceProperties,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      setPropertiesOperationSpec
    ) as Promise<ServiceSetPropertiesResponse>;
  }

  /**
   * Gets the properties of an account's Table service, including properties for Analytics and CORS
   * (Cross-Origin Resource Sharing) rules.
   * @param options The options parameters.
   */
  getProperties(
    options?: ServiceGetPropertiesOptionalParams
  ): Promise<ServiceGetPropertiesResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getPropertiesOperationSpec
    ) as Promise<ServiceGetPropertiesResponse>;
  }

  /**
   * Retrieves statistics related to replication for the Table service. It is only available on the
   * secondary location endpoint when read-access geo-redundant replication is enabled for the account.
   * @param options The options parameters.
   */
  getStatistics(
    options?: ServiceGetStatisticsOptionalParams
  ): Promise<ServiceGetStatisticsResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getStatisticsOperationSpec
    ) as Promise<ServiceGetStatisticsResponse>;
  }
}
// Operation Specifications
const xmlSerializer = new coreHttp.Serializer(Mappers, /* isXml */ true);

const setPropertiesOperationSpec: coreHttp.OperationSpec = {
  path: "/",
  httpMethod: "PUT",
  responses: {
    202: {
      headersMapper: Mappers.ServiceSetPropertiesHeaders
    },
    default: {
      bodyMapper: Mappers.TableServiceError,
      headersMapper: Mappers.ServiceSetPropertiesExceptionHeaders
    }
  },
  requestBody: Parameters.tableServiceProperties,
  queryParameters: [Parameters.timeout, Parameters.restype, Parameters.comp1],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.contentType2,
    Parameters.accept3
  ],
  isXML: true,
  contentType: "application/xml; charset=utf-8",
  mediaType: "xml",
  serializer: xmlSerializer
};
const getPropertiesOperationSpec: coreHttp.OperationSpec = {
  path: "/",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TableServiceProperties,
      headersMapper: Mappers.ServiceGetPropertiesHeaders
    },
    default: {
      bodyMapper: Mappers.TableServiceError,
      headersMapper: Mappers.ServiceGetPropertiesExceptionHeaders
    }
  },
  queryParameters: [Parameters.timeout, Parameters.restype, Parameters.comp1],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.accept2
  ],
  isXML: true,
  serializer: xmlSerializer
};
const getStatisticsOperationSpec: coreHttp.OperationSpec = {
  path: "/",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TableServiceStats,
      headersMapper: Mappers.ServiceGetStatisticsHeaders
    },
    default: {
      bodyMapper: Mappers.TableServiceError,
      headersMapper: Mappers.ServiceGetStatisticsExceptionHeaders
    }
  },
  queryParameters: [Parameters.timeout, Parameters.restype, Parameters.comp2],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.accept2
  ],
  isXML: true,
  serializer: xmlSerializer
};
