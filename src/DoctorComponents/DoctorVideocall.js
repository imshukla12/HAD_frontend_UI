import React from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'

const DoctorVideocall = (props) => {
    console.log("props",props)
    // console.log("videoCall",{props.value})
    const roomId = props.value.toString()
    const dr = JSON.parse(localStorage.getItem("doctorDetails"))
    const drName = dr.firstName
    console.log("roomCode",roomId)

    const myMeeting = async (element) => {
        //   const appID = 1613973613;             ***one-on-one call
        //   const serverSecret = "f06a963274343ee0a50c0ed8377bcd10";
        const appID = 524151284;       //tele-health
        const serverSecret = "430713bb560808706b4918807d0af4a9";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret,
            roomId,
            Date.now().toString(), //userId
            drName  
        )

        const zp = ZegoUIKitPrebuilt.create(kitToken)

        zp.joinRoom({
            container: element,
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall
            },
            sharedLinks: [
                {
                    name: 'Personal link',
                    url:
                        window.location.protocol + '//' +
                        window.location.host + window.location.pathname +
                        '?roomID=' +
                        roomId,
                },
            ],
            showPreJoinView: true,
            showScreenSharingButton: false,
            maxUsers: 2,
            showUserList: false,
            layout: "Auto",
            showLayoutButton: true,
            showRoomDetailsButton: false,
            turnOnCameraWhenJoining: false,
            turnOnMicrophoneWhenJoining: false,
            whiteboardConfig: {
                showAddImageButton: true // It's set to false by default. To use this feature, activate the File Sharing feature, and then import the plugin. Otherwise, this prompt will occur: "Failed to add image, this feature is not supported."
                // showCreateAndCloseButton?: boolean; // Whether to display the button that is used to create/turn off the whiteboard. Displayed by default.
            }
        })
    }

    return (
        <div className='room-page bg-blue-50'>
            <div ref={myMeeting} />
        </div>
    )
}

export default DoctorVideocall