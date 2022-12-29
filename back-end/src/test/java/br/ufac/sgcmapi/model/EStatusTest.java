package br.ufac.sgcmapi.model;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

public class EStatusTest {

    @Test
    public void testProximo() {
        EStatus status = EStatus.AGENDADO;
        status = status.proximo();
        assertEquals(EStatus.CONFIRMADO, status);
    }
    
}
