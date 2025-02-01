import React, { useMemo } from 'react';

import Select from '../../../../components/SimpleSelect';
import InputWithLabel from '../../../../components/InputWithLabel';

import { ScheduleContainer, Divisor, DeleteContainer } from './styles';

interface ScheduleProps {
    removeSchedule?: () => void;
}

const Schedule: React.FC<ScheduleProps> = ({ removeSchedule }) => {
    const weekDayOptions = useMemo(() => {
        return [
            { value: '0', label: 'Domingo' },
            { value: '1', label: 'Segunda-feira' },
            { value: '2', label: 'Terça-feira' },
            { value: '3', label: 'Quarta-feira' },
            { value: '4', label: 'Quinta-feira' },
            { value: '5', label: 'Sexta-feira' },
            { value: '6', label: 'Sábado' },
        ];
    }, []);
    
    return (
        <>
            <ScheduleContainer>
            <Select
                name="week_day"
                label="Dia da semana"
                placeholder="Selecione um dia da semana"
                options={weekDayOptions}
                defaultValue={weekDayOptions[0]}
            />
            
            <InputWithLabel
                name="from"
                label="Das"
                defaultValue="00:00"
                type="time"
            />

            <InputWithLabel 
                name="to"
                label="Até"
                defaultValue="00:00"
                type="time"
            
            />
            </ScheduleContainer>
            <DeleteContainer>
                <Divisor/>
                <button onClick={removeSchedule} type="button">
                    Excluir horário
                </button>
                <Divisor/>
            </DeleteContainer>
            
        </>
    );
}

export default Schedule;