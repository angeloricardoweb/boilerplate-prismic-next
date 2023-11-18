import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import { constants } from '../infra/constantes'

export function useRole() {
    const [role, setRole] = useState('' as string)


    function setRoleStorage(role: string) {
        Cookies.set(constants.ROLE_NAME, role)
    }

    function getRoleStorage() {
        return Cookies.get(constants.ROLE_NAME)
    }

    function removeRoleStorage() {
        Cookies.remove(constants.ROLE_NAME)
    }

    useEffect(() => {
        const role = getRoleStorage()
        if (role) {
            setRole(role)
        }
    }, [])

    return {
        role,
        setRoleStorage,
        getRoleStorage,
        removeRoleStorage
    }
}
