<?php

return [
    'job_id' => ['type' => 'dropdown', 'label' => 'Posisi ID', 'options' => [1 => 'Programmer PHP']],
    'full_name' => ['type' => 'text', 'label' => 'Fullname'],
    'email' => ['type' => 'email', 'label' => 'Email Address', 'required' => true],
    'phone' => ['type' => 'text', 'label' => 'Phone'],
    'current_company' => ['type' => 'text', 'label' => 'Current Company'],
    'birth_day' => ['type' => 'datepicker', 'label' => 'Birth Day'],
    'birth_place' => ['type' => 'text', 'label' => 'Birth Place'],
    'latest_education' => ['type' => 'text', 'label' => 'Latest Education'],
    'male' => ['type' => 'radioGroup', 'label' => 'Jenis Kelamin', 'options' => ['L' => 'Laki-laki', 'P' => 'Perempuan']],
    'join_date' => ['type' => 'dropdown', 'label' => 'Join Date', 'options' => ['Immediately' => 'Immediately', 'One Month Notice' => 'One Month Notice']],
    'current_address' => ['type' => 'textarea', 'label' => 'Current Address'],
    'about' => ['type' => 'textarea', 'label' => 'About'],
    'portofolio' => ['type' => 'text', 'label' => 'Portofolio URL'],
    'linkedin_profile' => ['type' => 'text', 'label' => 'Linkedin Profile'],
    'sumber_lamaran' => ['type' => 'text', 'label' => 'How do you know this opportunity?'],
    'resume_cv' => ['type' => 'uploader', 'label' => 'Resume/CV'],
    'additional_information' => ['type' => 'redactor', 'label' => 'Additional Information'],
];
