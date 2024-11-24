package com.polideportivo.backend_springboot.domain.service;

import com.polideportivo.backend_springboot.domain.exception.DeporteNotFoundException;
import com.polideportivo.backend_springboot.domain.model.Deporte;
import com.polideportivo.backend_springboot.domain.repository.DeporteRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class DeporteServiceImpl implements DeporteService {
    
    private final DeporteRepository repository;
    private final ImageService imageService;

    @Transactional(readOnly = true)
    public List<Deporte> getAllDeportes() {
        // Obtiene todos los deportes
        List<Deporte> deportes = repository.findByDeletedAtIsNull();
        // Asigna imágenes a cada deporte y a las pistas asociadas
        deportes.forEach(deporte -> {
            // Cargar imágenes del deporte
            deporte.setImages(
                imageService.getImagesForEntity("App\\Models\\Deporte", deporte.getId())
            );

            // Cargar imágenes de las pistas asociadas al deporte
            deporte.getPistas().forEach(pista -> 
                pista.setImages(
                    imageService.getImagesForEntity("App\\Models\\Pista", pista.getId())
                )
            );
        });
        return deportes;
    }

    @Transactional(readOnly = true)
    public Deporte getBySlug(String slug) {
        // Busca el deporte por slug
        Deporte deporte = repository.findBySlugAndDeletedAtIsNull(slug).orElseThrow(DeporteNotFoundException::new);
        // Asigna imágenes al deporte
        deporte.setImages(imageService.getImagesForEntity("App\\Models\\Deporte", deporte.getId()));

        // Cargar imágenes de las pistas asociadas
        deporte.getPistas().forEach(pista -> 
            pista.setImages(
                imageService.getImagesForEntity("App\\Models\\Pista", pista.getId())
            )
        );
        return deporte;
    }
}
