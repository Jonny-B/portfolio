import React from 'react';
import { Button, Form, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { InitialStarType } from '../../../types'
import { PreRenderSim } from '../../../simulation/PreRenderSim';

interface PreRenderTabProps {
    shouldDraw: boolean,
    handleReset: () => void;
    setShouldDraw: (arg: boolean) => void;
    isPreRendering: boolean;
    setPreRenderTime: (arg: number) => void;
    setIsPlayingPreRendered: (arg: boolean) => void;
    setIsPreRendering: (arg: boolean) => void;
    preRenderSim: PreRenderSim;
    handleScenarioSelect: (arg: React.ChangeEvent<HTMLSelectElement>) => void;
    setStars: (arg: InitialStarType) => void;
    stars: InitialStarType;
    scenario: string;
}

export default function PreRenderTab(props: PreRenderTabProps) {

    const { isPreRendering,
        setPreRenderTime,
        setIsPlayingPreRendered,
        setIsPreRendering,
        preRenderSim,
        handleScenarioSelect,
        setStars,
        stars,
        scenario,
    } = props;


    function handleStartPrerender(): void {
        preRenderSim.preRenderedSim.length > 0 ? setIsPlayingPreRendered(true) : setIsPreRendering(true)
    }

    return (
        <div id='preRender'>
            <OverlayTrigger
                placement={'right'}
                overlay={
                    <Tooltip id={`tooltip-right`}>
                        Using the Prerender feature allows you to set a alloted amount of time (min) for the program to prerender.
                        Upon completion, the prerender simulation can be run. This simulation allows for far greater quantities of stars to be simulated with greater accuracty.
                        You can select scenarios and set preconditions in interactive mode like you would with the live simulation.
                    </Tooltip>
                }
            >
                <Form.Label>PreRender (min)</Form.Label>
            </OverlayTrigger>
            <Form.Control placeholder={"min"} type="number" onChange={(e) => setPreRenderTime(parseInt(e.target.value) * 3000)} className="pre-render-time" />
            <Button size={'sm'} onClick={handleStartPrerender}>
                {preRenderSim.preRenderedSim.length > 0 ? "Play PreRender" : "Start PreRendering"}
            </Button>
            <br />
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
        </div>
    )
}
