	{!! form()->text('name')->label('Name') !!}
	{!! form()->text('email')->label('Email') !!}
	{!! form()->datepicker('email_verified_at')->label('Email Verified At') !!}
	{!! form()->text('password')->label('Password') !!}
	{!! form()->text('status')->label('Status') !!}
	{!! form()->text('timezone')->label('Timezone') !!}
	{!! form()->datepicker('password_changed_at')->label('Password Changed At') !!}

{!!
    form()->action([
        form()->submit('Simpan'),
        form()->link('Batal', route('modules::user.index'))
    ])
!!}
