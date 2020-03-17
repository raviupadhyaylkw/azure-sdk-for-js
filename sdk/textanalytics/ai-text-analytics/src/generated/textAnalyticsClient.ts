/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as Parameters from "./models/parameters";
import { TextAnalyticsClientContext } from "./textAnalyticsClientContext";

class TextAnalyticsClient extends TextAnalyticsClientContext {
  /**
   * Initializes a new instance of the TextAnalyticsClient class.
   * @param endpoint Supported Cognitive Services endpoints (protocol and hostname, for example:
   * https://westus.api.cognitive.microsoft.com).
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param [options] The parameter options
   */
  constructor(credentials: coreHttp.TokenCredential | coreHttp.ServiceClientCredentials, endpoint: string, options?: coreHttp.ServiceClientOptions) {
    super(credentials, endpoint, options);
  }

  /**
   * The API returns a list of general named entities in a given document. For the list of supported
   * entity types, check <a href="https://aka.ms/taner">Supported Entity Types in Text Analytics
   * API</a>. See the <a href="https://aka.ms/talangs">Supported languages in Text Analytics API</a>
   * for the list of enabled languages.
   * @summary Named Entity Recognition
   * @param input Collection of documents to analyze.
   * @param [options] The optional parameters
   * @returns Promise<Models.EntitiesRecognitionGeneralResponse>
   */
  entitiesRecognitionGeneral(input: Models.MultiLanguageBatchInput, options?: Models.TextAnalyticsClientEntitiesRecognitionGeneralOptionalParams): Promise<Models.EntitiesRecognitionGeneralResponse>;
  /**
   * @param input Collection of documents to analyze.
   * @param callback The callback
   */
  entitiesRecognitionGeneral(input: Models.MultiLanguageBatchInput, callback: coreHttp.ServiceCallback<Models.EntitiesResult>): void;
  /**
   * @param input Collection of documents to analyze.
   * @param options The optional parameters
   * @param callback The callback
   */
  entitiesRecognitionGeneral(input: Models.MultiLanguageBatchInput, options: Models.TextAnalyticsClientEntitiesRecognitionGeneralOptionalParams, callback: coreHttp.ServiceCallback<Models.EntitiesResult>): void;
  entitiesRecognitionGeneral(input: Models.MultiLanguageBatchInput, options?: Models.TextAnalyticsClientEntitiesRecognitionGeneralOptionalParams | coreHttp.ServiceCallback<Models.EntitiesResult>, callback?: coreHttp.ServiceCallback<Models.EntitiesResult>): Promise<Models.EntitiesRecognitionGeneralResponse> {
    return this.sendOperationRequest(
      {
        input,
        options
      },
      entitiesRecognitionGeneralOperationSpec,
      callback) as Promise<Models.EntitiesRecognitionGeneralResponse>;
  }

  /**
   * The API returns a list of entities with personal information (\"SSN\", \"Bank Account\" etc) in
   * the document. For the list of supported entity types, check <a
   * href="https://aka.ms/tanerpii">Supported Entity Types in Text Analytics API</a>. See the <a
   * href="https://aka.ms/talangs">Supported languages in Text Analytics API</a> for the list of
   * enabled languages.
   * @summary Entities containing personal information
   * @param input Collection of documents to analyze.
   * @param [options] The optional parameters
   * @returns Promise<Models.EntitiesRecognitionPiiResponse>
   */
  entitiesRecognitionPii(input: Models.MultiLanguageBatchInput, options?: Models.TextAnalyticsClientEntitiesRecognitionPiiOptionalParams): Promise<Models.EntitiesRecognitionPiiResponse>;
  /**
   * @param input Collection of documents to analyze.
   * @param callback The callback
   */
  entitiesRecognitionPii(input: Models.MultiLanguageBatchInput, callback: coreHttp.ServiceCallback<Models.EntitiesResult>): void;
  /**
   * @param input Collection of documents to analyze.
   * @param options The optional parameters
   * @param callback The callback
   */
  entitiesRecognitionPii(input: Models.MultiLanguageBatchInput, options: Models.TextAnalyticsClientEntitiesRecognitionPiiOptionalParams, callback: coreHttp.ServiceCallback<Models.EntitiesResult>): void;
  entitiesRecognitionPii(input: Models.MultiLanguageBatchInput, options?: Models.TextAnalyticsClientEntitiesRecognitionPiiOptionalParams | coreHttp.ServiceCallback<Models.EntitiesResult>, callback?: coreHttp.ServiceCallback<Models.EntitiesResult>): Promise<Models.EntitiesRecognitionPiiResponse> {
    return this.sendOperationRequest(
      {
        input,
        options
      },
      entitiesRecognitionPiiOperationSpec,
      callback) as Promise<Models.EntitiesRecognitionPiiResponse>;
  }

  /**
   * The API returns a list of recognized entities with links to a well-known knowledge base. See the
   * <a href="https://aka.ms/talangs">Supported languages in Text Analytics API</a> for the list of
   * enabled languages.
   * @summary Linked entities from a well-known knowledge base
   * @param input Collection of documents to analyze.
   * @param [options] The optional parameters
   * @returns Promise<Models.EntitiesLinkingResponse>
   */
  entitiesLinking(input: Models.MultiLanguageBatchInput, options?: Models.TextAnalyticsClientEntitiesLinkingOptionalParams): Promise<Models.EntitiesLinkingResponse>;
  /**
   * @param input Collection of documents to analyze.
   * @param callback The callback
   */
  entitiesLinking(input: Models.MultiLanguageBatchInput, callback: coreHttp.ServiceCallback<Models.EntityLinkingResult>): void;
  /**
   * @param input Collection of documents to analyze.
   * @param options The optional parameters
   * @param callback The callback
   */
  entitiesLinking(input: Models.MultiLanguageBatchInput, options: Models.TextAnalyticsClientEntitiesLinkingOptionalParams, callback: coreHttp.ServiceCallback<Models.EntityLinkingResult>): void;
  entitiesLinking(input: Models.MultiLanguageBatchInput, options?: Models.TextAnalyticsClientEntitiesLinkingOptionalParams | coreHttp.ServiceCallback<Models.EntityLinkingResult>, callback?: coreHttp.ServiceCallback<Models.EntityLinkingResult>): Promise<Models.EntitiesLinkingResponse> {
    return this.sendOperationRequest(
      {
        input,
        options
      },
      entitiesLinkingOperationSpec,
      callback) as Promise<Models.EntitiesLinkingResponse>;
  }

  /**
   * The API returns a list of strings denoting the key phrases in the input text. See the <a
   * href="https://aka.ms/talangs">Supported languages in Text Analytics API</a> for the list of
   * enabled languages.
   * @summary Key Phrases
   * @param input Collection of documents to analyze. Documents can now contain a language field to
   * indicate the text language
   * @param [options] The optional parameters
   * @returns Promise<Models.KeyPhrasesResponse>
   */
  keyPhrases(input: Models.MultiLanguageBatchInput, options?: Models.TextAnalyticsClientKeyPhrasesOptionalParams): Promise<Models.KeyPhrasesResponse>;
  /**
   * @param input Collection of documents to analyze. Documents can now contain a language field to
   * indicate the text language
   * @param callback The callback
   */
  keyPhrases(input: Models.MultiLanguageBatchInput, callback: coreHttp.ServiceCallback<Models.KeyPhraseResult>): void;
  /**
   * @param input Collection of documents to analyze. Documents can now contain a language field to
   * indicate the text language
   * @param options The optional parameters
   * @param callback The callback
   */
  keyPhrases(input: Models.MultiLanguageBatchInput, options: Models.TextAnalyticsClientKeyPhrasesOptionalParams, callback: coreHttp.ServiceCallback<Models.KeyPhraseResult>): void;
  keyPhrases(input: Models.MultiLanguageBatchInput, options?: Models.TextAnalyticsClientKeyPhrasesOptionalParams | coreHttp.ServiceCallback<Models.KeyPhraseResult>, callback?: coreHttp.ServiceCallback<Models.KeyPhraseResult>): Promise<Models.KeyPhrasesResponse> {
    return this.sendOperationRequest(
      {
        input,
        options
      },
      keyPhrasesOperationSpec,
      callback) as Promise<Models.KeyPhrasesResponse>;
  }

  /**
   * The API returns the detected language and a numeric score between 0 and 1. Scores close to 1
   * indicate 100% certainty that the identified language is true. See the <a
   * href="https://aka.ms/talangs">Supported languages in Text Analytics API</a> for the list of
   * enabled languages.
   * @summary Detect Language
   * @param input Collection of documents to analyze.
   * @param [options] The optional parameters
   * @returns Promise<Models.LanguagesResponse>
   */
  languages(input: Models.LanguageBatchInput, options?: Models.TextAnalyticsClientLanguagesOptionalParams): Promise<Models.LanguagesResponse>;
  /**
   * @param input Collection of documents to analyze.
   * @param callback The callback
   */
  languages(input: Models.LanguageBatchInput, callback: coreHttp.ServiceCallback<Models.LanguageResult>): void;
  /**
   * @param input Collection of documents to analyze.
   * @param options The optional parameters
   * @param callback The callback
   */
  languages(input: Models.LanguageBatchInput, options: Models.TextAnalyticsClientLanguagesOptionalParams, callback: coreHttp.ServiceCallback<Models.LanguageResult>): void;
  languages(input: Models.LanguageBatchInput, options?: Models.TextAnalyticsClientLanguagesOptionalParams | coreHttp.ServiceCallback<Models.LanguageResult>, callback?: coreHttp.ServiceCallback<Models.LanguageResult>): Promise<Models.LanguagesResponse> {
    return this.sendOperationRequest(
      {
        input,
        options
      },
      languagesOperationSpec,
      callback) as Promise<Models.LanguagesResponse>;
  }

  /**
   * The API returns a sentiment prediction, as well as sentiment scores for each sentiment class
   * (Positive, Negative, and Neutral) for the document and each sentence within it. See the <a
   * href="https://aka.ms/talangs">Supported languages in Text Analytics API</a> for the list of
   * enabled languages.
   * @summary Sentiment
   * @param input Collection of documents to analyze.
   * @param [options] The optional parameters
   * @returns Promise<Models.SentimentResponse2>
   */
  sentiment(input: Models.MultiLanguageBatchInput, options?: Models.TextAnalyticsClientSentimentOptionalParams): Promise<Models.SentimentResponse2>;
  /**
   * @param input Collection of documents to analyze.
   * @param callback The callback
   */
  sentiment(input: Models.MultiLanguageBatchInput, callback: coreHttp.ServiceCallback<Models.SentimentResponse>): void;
  /**
   * @param input Collection of documents to analyze.
   * @param options The optional parameters
   * @param callback The callback
   */
  sentiment(input: Models.MultiLanguageBatchInput, options: Models.TextAnalyticsClientSentimentOptionalParams, callback: coreHttp.ServiceCallback<Models.SentimentResponse>): void;
  sentiment(input: Models.MultiLanguageBatchInput, options?: Models.TextAnalyticsClientSentimentOptionalParams | coreHttp.ServiceCallback<Models.SentimentResponse>, callback?: coreHttp.ServiceCallback<Models.SentimentResponse>): Promise<Models.SentimentResponse2> {
    return this.sendOperationRequest(
      {
        input,
        options
      },
      sentimentOperationSpec,
      callback) as Promise<Models.SentimentResponse2>;
  }
}

// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers);
const entitiesRecognitionGeneralOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "POST",
  path: "entities/recognition/general",
  urlParameters: [
    Parameters.endpoint
  ],
  queryParameters: [
    Parameters.modelVersion,
    Parameters.includeStatistics
  ],
  requestBody: {
    parameterPath: "input",
    mapper: {
      ...Mappers.MultiLanguageBatchInput,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.EntitiesResult
    },
    default: {
      bodyMapper: Mappers.TextAnalyticsError
    }
  },
  serializer
};

const entitiesRecognitionPiiOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "POST",
  path: "entities/recognition/pii",
  urlParameters: [
    Parameters.endpoint
  ],
  queryParameters: [
    Parameters.modelVersion,
    Parameters.includeStatistics
  ],
  requestBody: {
    parameterPath: "input",
    mapper: {
      ...Mappers.MultiLanguageBatchInput,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.EntitiesResult
    },
    default: {
      bodyMapper: Mappers.TextAnalyticsError
    }
  },
  serializer
};

const entitiesLinkingOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "POST",
  path: "entities/linking",
  urlParameters: [
    Parameters.endpoint
  ],
  queryParameters: [
    Parameters.modelVersion,
    Parameters.includeStatistics
  ],
  requestBody: {
    parameterPath: "input",
    mapper: {
      ...Mappers.MultiLanguageBatchInput,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.EntityLinkingResult
    },
    default: {
      bodyMapper: Mappers.TextAnalyticsError
    }
  },
  serializer
};

const keyPhrasesOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "POST",
  path: "keyPhrases",
  urlParameters: [
    Parameters.endpoint
  ],
  queryParameters: [
    Parameters.modelVersion,
    Parameters.includeStatistics
  ],
  requestBody: {
    parameterPath: "input",
    mapper: {
      ...Mappers.MultiLanguageBatchInput,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.KeyPhraseResult
    },
    default: {
      bodyMapper: Mappers.TextAnalyticsError
    }
  },
  serializer
};

const languagesOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "POST",
  path: "languages",
  urlParameters: [
    Parameters.endpoint
  ],
  queryParameters: [
    Parameters.modelVersion,
    Parameters.includeStatistics
  ],
  requestBody: {
    parameterPath: "input",
    mapper: {
      ...Mappers.LanguageBatchInput,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.LanguageResult
    },
    default: {
      bodyMapper: Mappers.TextAnalyticsError
    }
  },
  serializer
};

const sentimentOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "POST",
  path: "sentiment",
  urlParameters: [
    Parameters.endpoint
  ],
  queryParameters: [
    Parameters.modelVersion,
    Parameters.includeStatistics
  ],
  requestBody: {
    parameterPath: "input",
    mapper: {
      ...Mappers.MultiLanguageBatchInput,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.SentimentResponse
    },
    default: {
      bodyMapper: Mappers.TextAnalyticsError
    }
  },
  serializer
};

export {
  TextAnalyticsClient,
  TextAnalyticsClientContext,
  Models as TextAnalyticsModels,
  Mappers as TextAnalyticsMappers
};