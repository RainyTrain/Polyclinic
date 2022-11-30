import React, { useEffect, useMemo, useState } from "react"
import "../Services/services.scss"
import {data} from "./Data/data.js"

function Services() {

    const [service, setService] = useState('')
    const [list, setList] = useState(data)

    console.log(service)

    const sortedBySpecialisation = useMemo(() => {
        return [...list].filter(item => item.specialisation == service)
    },[service])

    console.log(sortedBySpecialisation)

    return (
        <section className="services">
            <div className="services__menu">
                <div className="services__name">
                    Choose service:
                </div>
                <div className="services__option">
                    <select onChange={e => setService(e.target.value)}>
                        <option value="">Please choose the service</option>
                        <option value="allergist">Allergist</option>
                        <option value="dentist">Dentist</option>
                        <option value="dermatologist">Dermatologist</option>
                        <option value="neurologist">Neurologist</option>
                        <option value="ophthalmologist">Ophthalmologist</option>
                        <option value="orthopedist">Orthopedist </option>
                        <option value="pediatrician">Pediatrician</option>
                        <option value="psychologist">Psychologist</option>
                        <option value="surgeon">Surgeon</option>
                    </select>
                </div>
            </div>
            <div className="services__element">
                Service - {service}
                {/* {sortedBySpecialisation.map(item => {
                    return <div key={item.name}>{item.name} {item.sername}</div>
                })} */}
            </div>
        </section>
    )
}

export default Services