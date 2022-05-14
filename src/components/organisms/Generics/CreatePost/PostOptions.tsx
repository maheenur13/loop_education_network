import { addNewProjectPost, addNewResearchPost, ISinglePost } from '@store/actions';
import { generateUid } from '@utils/helpers';
import { useRouter } from 'next/router';
import { ChangeEvent, FC, FormEvent, Fragment, useState } from 'react';
import { Button, Col, FormCheck, FormControl, FormLabel, Modal, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { initialValues } from './constants';

export const PostOptions: FC<PropsType> = ({ show, onHide, postType }) => {
	const [values, setValues] = useState<ISinglePost>(JSON.parse(JSON.stringify(initialValues)));
	const dispatch = useDispatch();
	const router = useRouter();

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const handleChange = (e: ChangeEvent<HTMLInputElement | any>, index?: number) => {
		const { name, value, id, checked, files } = e.target;
		setValues((prevState) => {
			const obj = { ...prevState };
			if (checked) {
				obj[name] = id as 'SINGLE' | 'MANY';
			} else if (index >= 0) {
				obj['team'][index][name] = value;
			} else if (files) {
				if (files[0]) obj[name] = URL.createObjectURL(files[0]);
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
		setValues(JSON.parse(JSON.stringify(initialValues)));
		onHide();
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const uid = generateUid();
		const time = new Date().toISOString();
		const payload = { ...values, id: uid, createdAt: time };

		if (postType === 'RESEARCH') {
			dispatch(addNewResearchPost(payload));
			handleClose();
			router.push(router.asPath);
		}
		if (postType === 'PROJECT') {
			dispatch(addNewProjectPost(payload));
			handleClose();
			router.push(router.asPath);
		}
	};

	return (
		<Wrapper show={show} onHide={handleClose} size="lg">
			<Modal.Header closeButton>
				<h5 className="mb-0">Create a post</h5>
			</Modal.Header>
			<Modal.Body>
				<form autoComplete="off" autoCorrect="off" onSubmit={handleSubmit}>
					<Row>
						<Col md={6}>
							<FormLabel>Title</FormLabel>
							<FormControl
								placeholder="Title"
								name="title"
								value={values.title}
								onChange={handleChange}
								required
							/>
						</Col>
						<Col md={6}>
							<FormLabel>Upload Image</FormLabel>
							<FormControl type="file" accept="image/*" name="image" onChange={handleChange} required />
						</Col>
						<Col md={6}>
							<FormLabel>Link</FormLabel>
							<FormControl
								placeholder="Link"
								name="link"
								value={values.link}
								onChange={handleChange}
								required
							/>
						</Col>

						<Col md={6}>
							<FormLabel>Upload PDF</FormLabel>
							<FormControl
								type="file"
								name="pdf"
								accept="application/pdf"
								onChange={handleChange}
								required
							/>
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
								required
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
										required
									/>
								</Col>
								<Col md={6}>
									{/* <FormLabel>Institute</FormLabel> */}
									<FormControl
										placeholder="Institute"
										name="educationInstitute"
										value={educationInstitute}
										onChange={(e) => handleChange(e, i)}
										required
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
								required
							/>
						</Col>
						<Col md={6}>
							<FormLabel>Supervisor Institute</FormLabel>
							<FormControl
								placeholder="Supervisor Institute"
								name="supervisorInstitute"
								value={values.supervisorInstitute}
								onChange={handleChange}
								required
							/>
						</Col>
						<Col md={6}>
							<FormLabel>Supervisor Subject</FormLabel>
							<FormControl
								placeholder="Supervisor Subject"
								name="supervisorSubject"
								value={values.supervisorSubject}
								onChange={handleChange}
								required
							/>
						</Col>
					</Row>

					<Button type="submit" className="d-block w-100 mt-3">
						Post
					</Button>
				</form>
			</Modal.Body>
		</Wrapper>
	);
};

interface PropsType {
	show?: boolean;
	onHide?: () => void;
	postType: 'RESEARCH' | 'PROJECT';
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
