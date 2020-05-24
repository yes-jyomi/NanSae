function sm() {
    joinForm.submit();
}

$(function () {
    const id = $('#id').val();
    const pwd = $('#pwd').val();
    const name = $('#name').val();
    const phone = $('#phone').val();
    const email = $('#email').val();
    const zipcode = $('#zipzode').val();
    const roadAddress = $('#roadAddress').val();
    const detailAddress = $('#detailAddress').val();
    const address = roadAddress + ", " + detailAddress;

    if (id === "" || name === "" || pwd === "" || phone === "" || email === "" || zipcode === "" || address === "") {
        $("#joinBt").attr("disabled", "disabled");
    }
});

/* 중복체크! */
$(function () {
    /* 아이디 수정했을 때 */
    $('#id').change(function () {
        $('#idCk').show();
        $("#joinBt").attr("id_check_result", "fail");
        $("#joinBt").attr("disabled", "disabled");
    });

    // 중복확인 버튼을 눌렀을 때
    $('#idCk').click(function () {
        const id = $('#id').val();
        // 이메일 란이 공백일 경우
        if (id == '') {
            alert('아이디를 입력해주세요.');
            $("#joinBt").attr("id_check_result", "fail");
            $("#joinBt").attr("disabled", "disabled");
            return false;
        }
        // debugger;
        $.ajax({
            url: '/users/join/check_email',
            data: {
                user_id: id
            },
            type: 'get',
            dataType: 'json',
            success: function (response) {
                if (response.result !== 'success') {
                    console.error(response.data)
                    return;
                }
                if (response.data === 'exist') {
                    alert("존재하는 아이디 입니다!");
                    $('#id').val('').focus();
                    $("#joinBt").attr("id_check_result", "fail");
                    $("#joinBt").attr("disabled", "disabled");
                    return;
                } else {
                    alert("사용 가능한 아이디입니다!");
                    $("#joinBt").attr("id_check_result", "success");
                    $("#joinBt").removeAttr("disabled");
                    $('#idCk').hide();
                    return;
                }
                // console.log(response)
            },
            error: function (xhr, error) {
                alert("서버와의 통신에서 문제가 발생했습니다.");
                $("#joinBt").attr("id_check_result", "fail");
                $("#joinBt").attr("disabled", "disabled");
                console.error("error : " + error);
            }
        });

        return false;
    });

    // 가입 버튼 눌렀을 때
    $('#joinForm').submit(function () {
        if ($("#joinBt").attr("id_check_result") === "fail") {
            alert("아이디 중복 확인를 해주시기 바랍니다.");
            $("#joinBt").attr("disabled", "disabled");
            $("#id").focus();
            return false;
        }
    });

    $("#id").on("propertychange change keyup paste input", function () {
        $('#barEmailck').show();
        $("#joinBt").attr("id_check_result", "fail");
    });
});

// 비밀번호 확인
$(function () {
    $("input").keyup(function () {
        const pwd = $("#pwd").val();
        const pwdCk = $("#pwd2").val();
        if (pwd !== "" || pwdCk !== "") {
            if (pwd === pwdCk) {
                $("#alert-success").show();
                $("#alert-danger").hide();
                $("#joinBt").removeAttr("disabled");
            } else {
                $("#alert-success").hide();
                $("#alert-danger").show();
                $("#joinBt").attr("disabled", "disabled");
            }
        } else {
            $("#alert-success").hide();
            $("#alert-danger").show();
            $("#joinBt").attr("disabled", "disabled");
        }
    });
});
