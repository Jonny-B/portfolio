import React from 'react';
import { Button, Form, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { InitialStarType } from '../../../types'

interface RealTimeTabProps {
    shouldDraw: boolean;
    setShouldDraw: (arg: boolean) => void;
    isPreRendering: boolean;
    handleScenarioSelect: (arg: React.ChangeEvent<HTMLSelectElement>) => void;
    handleReset: () => void;
    setStars: (arg: InitialStarType) => void;
    stars: InitialStarType;
    scenario: string;
    interactiveMode: boolean;
    setInteractiveMode: (arg: boolean) => void;
    interactiveStarMass: number;
    setInteractiveStarMass: (arg: number) => void;
    showOrbitTrails: boolean;
    setShowOrbitTrails: (arg: boolean) => void;
    gravConst: string;
    setGravConst: (arg: string) => void;
}

export default function RealTimeTab(props: RealTimeTabProps) {

    const { shouldDraw,
        setShouldDraw,
        isPreRendering,
        handleScenarioSelect,
        handleReset,
        setStars,
        stars,
        scenario,
        interactiveMode,
        setInteractiveMode,
        interactiveStarMass,
        setInteractiveStarMass,
        showOrbitTrails,
        setShowOrbitTrails,
        gravConst,
        setGravConst
    } = props;

    return (
        <div id='preRender'>
            <OverlayTrigger
                placement={'right'}
                overlay={
                    <Tooltip id={`tooltip-right`}>
                        Click 'Try It' to start the simulation.'
                    </Tooltip>
                }
            >
                <Form.Label>Get Started</Form.Label>
            </OverlayTrigger>

            <br />
            <Button size={'sm'} onClick={() => {
                shouldDraw ? handleReset() : setShouldDraw(true);
            }} disabled={isPreRendering}>{shouldDraw ? "Stop" : "Start"}</Button>
            <br />
            <OverlayTrigger
                placement={'right'}
                overlay={
                    <Tooltip id={`tooltip-right`}>
                        When you select a scenario from the dropdown and click the 'try it' button, the initial conditions and the number of stars in the simulation will change based on the selected scenario
                    </Tooltip>
                }
            >
                <Form.Label>Scenarios</Form.Label>
            </OverlayTrigger>

            <Form.Select size={'sm'} value={scenario} onChange={(e) => { handleScenarioSelect(e) }} disabled={isPreRendering}>
                <option>Random Distribution</option>
                <option>Simple Orbit</option>
                <option>Earth|Moon|Sun Orbit</option>
                <option>Solar System</option>
                <option>Solar System Collision</option>
                <option>Galaxy</option>
            </Form.Select>
            {
                scenario === 'Random Distribution' ?
                    <>
                        <Form.Label># Stars</Form.Label>
                        <Form.Label>Star # By Type</Form.Label>
                        <Form.Label>Black Holes</Form.Label>
                        <Form.Control size={'sm'} type="number" defaultValue={1} onChange={(e) => { setStars({ ...stars, blackHoles: parseInt(e.currentTarget.value) }) }} />
                        <Form.Label>Blue Giant</Form.Label>
                        <Form.Control size={'sm'} type="number" defaultValue={12} onChange={(e) => { setStars({ ...stars, blueGiants: parseInt(e.currentTarget.value) }) }} />
                        <Form.Label>Blue</Form.Label>
                        <Form.Control size={'sm'} type="number" defaultValue={50} onChange={(e) => { setStars({ ...stars, blues: parseInt(e.currentTarget.value) }) }} />
                        <Form.Label>Yellow</Form.Label>
                        <Form.Control size={'sm'} type="number" defaultValue={150} onChange={(e) => { setStars({ ...stars, yellows: parseInt(e.currentTarget.value) }) }} />
                        <Form.Label>Red Dwarf</Form.Label>
                        <Form.Control size={'sm'} type="number" defaultValue={350} onChange={(e) => { setStars({ ...stars, redDwarfs: parseInt(e.currentTarget.value) }) }} />

                    </>
                    :
                    <></>
            }
            <br />
            <OverlayTrigger
                placement={'right'}
                overlay={
                    <Tooltip id={`tooltip-right`}>
                        Click to enter Interactive Mode. This allows you to modify the simulation in real time by adding new stars or orbit lines.
                    </Tooltip>
                }
            >
                <Form.Label>Interactive Mode</Form.Label>
            </OverlayTrigger>
            <Form.Check value={"false"} type="switch" checked={interactiveMode} onChange={() => { setInteractiveMode(!interactiveMode) }} disabled={isPreRendering} />
            {interactiveMode ?
                <div className="interactive-mode">
                    <OverlayTrigger
                        placement={'right'}
                        overlay={
                            <Tooltip id={`tooltip-right`}>
                                Modifies the mass of the star that can be added in. You can also adjust the initial velocity of the star you add by clicking, dragging your mouse and realeasing.
                            </Tooltip>
                        }
                    >
                        <Form.Label>Star Mass</Form.Label>
                    </OverlayTrigger>
                    <Form.Control defaultValue={interactiveStarMass} type="number" onChange={(e) => setInteractiveStarMass(parseInt(e.target.value))} />
                    <br />
                    <OverlayTrigger
                        placement={'right'}
                        overlay={
                            <Tooltip id={`tooltip-right`}>
                                Add Orbit lines that trail behind the stars as they move.
                            </Tooltip>
                        }
                    >
                        <Form.Label>Show Orbit Lines</Form.Label>
                    </OverlayTrigger>
                    <Form.Check value={"true"} type="switch" checked={showOrbitTrails} onChange={() => { setShowOrbitTrails(!showOrbitTrails) }} />
                    <br />
                    <OverlayTrigger
                        placement={'right'}
                        overlay={
                            <Tooltip id={`tooltip-right`}>
                                Modify the strength of the Gravitational Constant
                            </Tooltip>
                        }
                    >
                        <Form.Label>Gravitational Constant</Form.Label>
                    </OverlayTrigger>
                    <Form.Control size={'sm'} type="number" value={gravConst} onChange={(e) => { setGravConst(e.currentTarget.value) }} />
                </div> :
                null}
            <br />
        </div>
    )
}
