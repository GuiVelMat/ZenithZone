package com.polideportivo.backend_springboot.api.exception;

import com.polideportivo.backend_springboot.domain.exception.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.util.*;

@Slf4j
@RestControllerAdvice
public class ExceptionHandlerController extends ResponseEntityExceptionHandler {
    
    private static final String GENERIC_ERROR_MESSAGE = "Oops! Something went wrong.";

    private Error.ErrorBuilder createErrorBuilder(Map<String, Object> errors) {
        return Error.builder()
                .errors(errors);
    }

    private Error.ErrorBuilder createErrorBuilder(String message) {
        return Error.builder()
                .status("error")
                .message(message);
    }

    @Override
    protected ResponseEntity<Object> handleExceptionInternal(Exception ex, Object body, HttpHeaders headers, HttpStatusCode statusCode, WebRequest request) {
        if (body == null || body instanceof String) {
            body = createErrorBuilder(GENERIC_ERROR_MESSAGE)
                    .build();
        }

        return super.handleExceptionInternal(ex, body, headers, statusCode, request);
    }

    private ResponseEntity<?> handleResourceNotFound(ResourceNotFoundException ex, WebRequest request, String name) {
        var status = HttpStatus.NOT_FOUND;
        var error = createErrorBuilder(toMap(name, ex.getMessage())).build();

        return handleExceptionInternal(ex, error, new HttpHeaders(), status, request);
    }

    @ExceptionHandler(DeporteNotFoundException.class)
    public ResponseEntity<?> handleDeporteNotFound(DeporteNotFoundException ex, WebRequest request) {
        return handleResourceNotFound(ex, request, "deporte");
    }

    @ExceptionHandler(PistaNotFoundException.class)
    public ResponseEntity<?> handlePistaNotFound(PistaNotFoundException ex, WebRequest request) {
        return handleResourceNotFound(ex, request, "pista");
    }

    @ExceptionHandler(EntrenamientoNotFoundException.class)
    public ResponseEntity<?> handleEntrenamientoNotFound(EntrenamientoNotFoundException ex, WebRequest request) {
        return handleResourceNotFound(ex, request, "entrenamiento");
    }

    @ExceptionHandler(BusinessException.class)
    public ResponseEntity<?> handleBusiness(BusinessException ex, WebRequest request) {
        var status = HttpStatus.INTERNAL_SERVER_ERROR;

        var error = createErrorBuilder(ex.getMessage()).build();

        return handleExceptionInternal(ex, error, new HttpHeaders(), status, request);
    }

    private List<String> toList(String message) {
        var messageList = new ArrayList<String>();
        messageList.add(message);
        return messageList;
    }

    private Map<String, Object> toMap(String field, String message) {
        var map = new HashMap<String, Object>();
        map.put(field, toList(message));
        return map;
    }
}