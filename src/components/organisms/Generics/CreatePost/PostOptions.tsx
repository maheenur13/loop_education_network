import { ChangeEvent, FC, Fragment, useState } from 'react';
import { Button, Col, FormCheck, FormControl, FormLabel, Modal, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { postOptionsInitialValues, PostOptionsType } from './constants';

export const PostOptions: FC<PropsType> = ({ show, onHide }) => {
	const [values, setValues] = useState<PostOptionsType>(postOptionsInitialValues);

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const handleChange = (e: ChangeEvent<HTMLInputElement | any>, index?: number) => {
		const { name, value, id, checked } = e.target;
		setValues((prevState) => {
			const obj = { ...prevState };
			if (checked) {
				obj['type'] = id as 'SINGLE' | 'MANY';
			} else if (index >= 0) {
				obj['team'][index][name] = value;
			} else {
				obj[name] = value;
			}
			return obj;
		});
	};

	const handleAddMore = () => {
		setValues((prevState) => ({ ...prevState, team: [...prevState.team, { name: '', educationInstitute: '' }] }));
	};
	const handleRemoveFromTeam = (index: number) => {
		setValues((prevState) => {
			const filteredArr = prevState.team.filter((_, i) => i !== index);
			return { ...prevState, team: filteredArr };
		});
	};
	const handleClose = () => {
		setValues(postOptionsInitialValues);
		onHide();
	};

	return (
		<Wrapper show={show} onHide={handleClose} size="lg">
			<Modal.Header closeButton>
				<h5 className="mb-0">Create a post</h5>
			</Modal.Header>
			<Modal.Body>
				<form autoComplete="off" autoCorrect="off">
					<Row>
						<Col md={6}>
							<FormLabel>Title</FormLabel>
							<FormControl
								placeholder="Title"
								name="title"
								value={values.title}
								onChange={handleChange}
							/>
						</Col>
						<Col md={6}>
							<FormLabel>Upload Image</FormLabel>
							<FormControl type="file" accept="image/*" placeholder="Upload Image" />
						</Col>
						<Col md={6}>
							<FormLabel>Link</FormLabel>
							<FormControl placeholder="Link" name="link" value={values.link} onChange={handleChange} />
						</Col>

						<Col md={6}>
							<FormLabel>Upload PDF</FormLabel>
							<FormControl type="file" accept="application/pdf" />
						</Col>

						<Col md={8}>
							<FormLabel>Description</FormLabel>
							<FormControl
								as="textarea"
								rows={3}
								placeholder="Description"
								name="description"
								value={values.description}
								onChange={handleChange}
							/>
						</Col>

						<hr style={{ backgroundColor: 'var(--bs-dark)', marginBottom: '0' }} />

						<Col md={8} className="d-flex">
							<FormLabel>Type:</FormLabel>
							<FormCheck
								type="radio"
								name="type"
								id="SINGLE"
								label="Single"
								checked={values.type === 'SINGLE'}
								className="mx-2"
								onChange={handleChange}
							/>
							<FormCheck
								type="radio"
								name="type"
								id="MANY"
								label="Many"
								checked={values.type === 'MANY'}
								className="mx-2"
								onChange={handleChange}
							/>
						</Col>
						<Col md={4} className="text-end">
							<Button
								size="sm"
								className="fw-bold"
								disabled={values.type === 'SINGLE'}
								onClick={handleAddMore}
							>
								Add More
							</Button>
						</Col>
						{values.team.map(({ name, educationInstitute }, i) => (
							<Fragment key={i}>
								<Col md={5}>
									{/* <FormLabel>Name</FormLabel> */}
									<FormControl
										placeholder="Name"
										name="name"
										value={name}
										onChange={(e) => handleChange(e, i)}
									/>
								</Col>
								<Col md={6}>
									{/* <FormLabel>Institute</FormLabel> */}
									<FormControl
										placeholder="Institute"
										name="educationInstitute"
										value={educationInstitute}
										onChange={(e) => handleChange(e, i)}
									/>
								</Col>
								<Col md={1}>
									<Button
										variant="danger"
										className="w-100"
										disabled={values.team.length === 1}
										onClick={() => handleRemoveFromTeam(i)}
									>
										X
									</Button>
								</Col>
							</Fragment>
						))}

						<hr style={{ backgroundColor: 'var(--bs-dark)', marginBottom: '0' }} />

						<Col md={6}>
							<FormLabel>Supervisor Name</FormLabel>
							<FormControl
								placeholder="Supervisor Name"
								name="supervisorName"
								value={values.supervisorName}
								onChange={handleChange}
							/>
						</Col>
						<Col md={6}>
							<FormLabel>Supervisor Institute</FormLabel>
							<FormControl
								placeholder="Supervisor Institute"
								name="supervisorInstitute"
								value={values.supervisorInstitute}
								onChange={handleChange}
							/>
						</Col>
						<Col md={6}>
							<FormLabel>Supervisor Subject</FormLabel>
							<FormControl
								placeholder="Supervisor Subject"
								name="supervisorSubject"
								value={values.supervisorSubject}
								onChange={handleChange}
							/>
						</Col>
					</Row>

					<Button className="d-block w-100 mt-3">Post</Button>
				</form>
			</Modal.Body>
		</Wrapper>
	);
};

interface PropsType {
	show?: boolean;
	onHide?: () => void;
}

const Wrapper = styled(Modal)`
	.modal-content {
		border-radius: 0.875rem;

		.modal-header {
			padding: 0.75rem 1rem;
		}
		.modal-body {
			.row {
				--bs-gutter-y: 15px;
			}
		}
	}
`;
