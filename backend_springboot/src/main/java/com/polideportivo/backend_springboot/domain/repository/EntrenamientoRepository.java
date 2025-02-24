package com.polideportivo.backend_springboot.domain.repository;

import com.polideportivo.backend_springboot.domain.model.Entrenamiento;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.List;

@Repository
public interface EntrenamientoRepository extends JpaRepository<Entrenamiento, Long>, JpaSpecificationExecutor<Entrenamiento> {

    Optional<Entrenamiento> findBySlugAndStatusAndDeletedAtIsNull(String slug, String status);
    
    List<Entrenamiento> findByStatusAndDeletedAtIsNull(String status);

    Optional<Entrenamiento> findBySlugAndStatusInAndDeletedAtIsNull(String slug, List<String> statuses);
}
