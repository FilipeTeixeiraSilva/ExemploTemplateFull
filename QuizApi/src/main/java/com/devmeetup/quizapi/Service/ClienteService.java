package com.devmeetup.quizapi.Service;

import com.devmeetup.quizapi.Config.ModelMapperConfig;
import com.devmeetup.quizapi.DTO.ClienteDTO;
import com.devmeetup.quizapi.Model.ClienteEntity;
import com.devmeetup.quizapi.Repository.ClienteRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClienteService {
    @Autowired
    private ClienteRepository clienteRepository;

    @Autowired
     private ModelMapper modelMapper;

    public ClienteDTO criarCliente(ClienteDTO clienteDTO){
        return modelMapper.map(clienteRepository.save(modelMapper.map(clienteDTO, ClienteEntity.class)), ClienteDTO.class);
    }

}
