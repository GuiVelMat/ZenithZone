package com.polideportivo.backend_springboot.api.controller;

import com.polideportivo.backend_springboot.api.assembler.PistaAssembler;
import com.polideportivo.backend_springboot.api.model.pista.PistaResponse;
import com.polideportivo.backend_springboot.api.model.pista.PistaWrapper;
import com.polideportivo.backend_springboot.api.security.authorization.CheckSecurity;
import com.polideportivo.backend_springboot.domain.service.PistaService;
import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.*;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.transaction.annotation.Transactional;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class PistaController {
    
    private final PistaService pistaService;
    private final PistaAssembler pistaAssembler;

    // Obtener todos las pistas
    @GetMapping("/pistas")
    @CheckSecurity.Public.canRead
    @Transactional
    public PistaWrapper getAllPistas() {

        var pistas = pistaService.getAllPistas();
        return pistaAssembler.toCollectionModel(pistas);
    }

    // Obtener una pista por su slug
    @GetMapping("/pistas/{slug}")
    @CheckSecurity.Public.canRead
    public PistaResponse getBySlug(@PathVariable String slug) {
        var pista = pistaService.getBySlug(slug);
        return pistaAssembler.toResponse(pista);
    }

    // Scroll de todas las pistas
    @GetMapping("/pistasInfinite")
    @CheckSecurity.Public.canRead
    @Transactional
    public PistaWrapper getAllScrollPistas(
        @RequestParam(defaultValue = "0") int offset,
        @RequestParam(defaultValue = "4") int limit
    ) {
        Pageable pageable = PageRequest.of(offset, limit);
        var pistas = pistaService.getAllScrollPistas(pageable).getContent();
        return pistaAssembler.toCollectionModel(pistas);
    }
}
