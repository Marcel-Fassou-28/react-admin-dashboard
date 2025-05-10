import { Bell, User } from "lucide-react"
import SettingSection from "./SettingSection"
import { useState } from "react"
import ToggleSwitch from "./ToggleSwitch"

function Notification() {
    const [notification, setNotification] = useState({
        push: true,
        email: false,
        sms: true
    })
    
  return (
    <SettingSection icon={Bell} title={"Notification"}>
       <ToggleSwitch label={"Push Notification"} isOn={notification.push} onToggle={() => {setNotification({...notification, push: !notification.push})}}/>
       <ToggleSwitch label={"Email Notification"} isOn={notification.email} onToggle={() => {setNotification({...notification, email: !notification.email})}} />
       <ToggleSwitch label={"SMS Notification"} isOn={notification.sms} onToggle={() => {setNotification({...notification, sms: !notification.sms})}} />
    </SettingSection>
  )
}

export default Notification
